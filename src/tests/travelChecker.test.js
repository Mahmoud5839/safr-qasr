import { describe, expect, it } from "vitest";

import {
  checkTravel,
  determineTravelStatus,
  evaluateDistance,
  evaluateQasr,
  evaluateJam,
  evaluateStayDuration,
} from "../rules/travelChecker";

import {
  QASR_DISTANCE,
  QASR_STATUS,
  JAM_STATUS,
  TRAVEL_STATUS,
  TRAVEL_POLICY,
  travelPolicy,
  travelSources,
  getTravelSource,
} from "../data/travelRules";

/* -------------------------------------------------------------------------- */
/* Test data                                                                   */
/* -------------------------------------------------------------------------- */

const baseTraveler = {
  hasStartedTravel: true,
  hasLeftBuiltUpArea: true,
  distanceKm: 120,
  hasReachedDestination: false,
  destinationIsHome: false,
  intendedStayDays: null,
  isReturningHome: false,
  prayingBehindResidentImam: false,
};

/* -------------------------------------------------------------------------- */
/* Input validation                                                            */
/* -------------------------------------------------------------------------- */

describe("Travel Checker - Validation", () => {
  it("rejects invalid input", () => {
    const result = checkTravel({
      distanceKm: "hello",
    });

    expect(result.success).toBe(false);
    expect(result.error.code).toBe("INVALID_INPUT");
  });

  it("accepts valid traveler input", () => {
    const result = checkTravel(baseTraveler);

    expect(result.success).toBe(true);
  });
});

/* -------------------------------------------------------------------------- */
/* Travel status                                                               */
/* -------------------------------------------------------------------------- */

describe("Travel Status", () => {
  it("returns resident before travel starts", () => {
    const result = determineTravelStatus({
      ...baseTraveler,
      hasStartedTravel: false,
    });

    expect(result).toBe(TRAVEL_STATUS.RESIDENT);
  });

  it("returns resident while still inside the built-up area", () => {
    const result = determineTravelStatus({
      ...baseTraveler,
      hasLeftBuiltUpArea: false,
    });

    expect(result).toBe(TRAVEL_STATUS.RESIDENT);
  });

  it("returns traveler after leaving residence", () => {
    const result = determineTravelStatus(baseTraveler);

    expect(result).toBe(TRAVEL_STATUS.TRAVELER);
  });

  it("ends travel when returning home", () => {
    const result = determineTravelStatus({
      ...baseTraveler,
      isReturningHome: true,
    });

    expect(result).toBe(TRAVEL_STATUS.TRAVEL_ENDED);
  });

  it("ends travel when destination is home", () => {
    const result = determineTravelStatus({
      ...baseTraveler,
      destinationIsHome: true,
    });

    expect(result).toBe(TRAVEL_STATUS.TRAVEL_ENDED);
  });
});

/* -------------------------------------------------------------------------- */
/* Distance                                                                    */
/* -------------------------------------------------------------------------- */

describe("Travel Distance", () => {
  it("uses the configured qasr distance", () => {
    const result = evaluateDistance(QASR_DISTANCE.DEFAULT_KM);

    expect(result.qualifies).toBe(true);
    expect(result.status).toBe(QASR_STATUS.AVAILABLE);
  });

  it("accepts distance above the threshold", () => {
    const result = evaluateDistance(120);

    expect(result.qualifies).toBe(true);
    expect(result.status).toBe(QASR_STATUS.AVAILABLE);
  });

  it("rejects distance below the threshold", () => {
    const result = evaluateDistance(50);

    expect(result.qualifies).toBe(false);
    expect(result.status).toBe(QASR_STATUS.NOT_AVAILABLE);
  });

  it("rejects negative distance", () => {
    const result = evaluateDistance(-20);

    expect(result.status).toBe(QASR_STATUS.UNCERTAIN);
  });
});

/* -------------------------------------------------------------------------- */
/* Qasr                                                                        */
/* -------------------------------------------------------------------------- */

describe("Qasr Rules", () => {
  it("does not allow qasr before travel starts", () => {
    const result = evaluateQasr({
      ...baseTraveler,
      hasStartedTravel: false,
    });

    expect(result.canShorten).toBe(false);
    expect(result.code).toBe("NOT_STARTED");
  });

  it("does not allow qasr before leaving the built-up area", () => {
    const result = evaluateQasr({
      ...baseTraveler,
      hasLeftBuiltUpArea: false,
    });

    expect(result.canShorten).toBe(false);
    expect(result.code).toBe("INSIDE_RESIDENCE");
  });

  it("does not allow qasr when distance is too short", () => {
    const result = evaluateQasr({
      ...baseTraveler,
      distanceKm: 50,
    });

    expect(result.canShorten).toBe(false);
    expect(result.code).toBe("DISTANCE_TOO_SHORT");
  });

  it("allows qasr when travel conditions are satisfied", () => {
    const result = evaluateQasr(baseTraveler);

    expect(result.canShorten).toBe(true);
    expect(result.status).toBe(QASR_STATUS.AVAILABLE);
    expect(result.code).toBe("QASR_AVAILABLE");
  });

  it("does not allow qasr after returning home", () => {
    const result = evaluateQasr({
      ...baseTraveler,
      isReturningHome: true,
    });

    expect(result.canShorten).toBe(false);
    expect(result.code).toBe("RETURNED_HOME");
  });

  it("does not allow qasr when destination is home", () => {
    const result = evaluateQasr({
      ...baseTraveler,
      destinationIsHome: true,
    });

    expect(result.canShorten).toBe(false);
    expect(result.code).toBe("RETURNED_HOME");
  });

  it("does not allow qasr behind a resident imam", () => {
    const result = evaluateQasr({
      ...baseTraveler,
      prayingBehindResidentImam: true,
    });

    expect(result.canShorten).toBe(false);
    expect(result.code).toBe("BEHIND_RESIDENT_IMAM");
  });
});

/* -------------------------------------------------------------------------- */
/* Jam'                                                                        */
/* -------------------------------------------------------------------------- */

describe("Jam Rules", () => {
  it("does not allow travel-based jam before travel", () => {
    const result = evaluateJam({
      ...baseTraveler,
      hasStartedTravel: false,
    });

    expect(result.canCombine).toBe(false);
    expect(result.status).toBe(JAM_STATUS.NOT_AVAILABLE);
  });

  it("does not allow travel-based jam below distance threshold", () => {
    const result = evaluateJam({
      ...baseTraveler,
      distanceKm: 50,
    });

    expect(result.canCombine).toBe(false);
  });

  it("allows travel to be a cause for jam when travel conditions exist", () => {
    const result = evaluateJam(baseTraveler);

    expect(result.canCombine).toBe(true);
    expect(result.status).toBe(JAM_STATUS.AVAILABLE);
  });

  it("does not allow travel-based jam after returning home", () => {
    const result = evaluateJam({
      ...baseTraveler,
      isReturningHome: true,
    });

    expect(result.canCombine).toBe(false);
  });
});

/* -------------------------------------------------------------------------- */
/* Stay duration                                                               */
/* -------------------------------------------------------------------------- */

describe("Stay Duration", () => {
  it("returns unknown when stay duration is not provided", () => {
    const result = evaluateStayDuration(null);

    expect(result.status).toBe("unknown");
    expect(result.fiqhDifference).toBe(true);
  });

  it("returns fiqh-dependent result for a known duration", () => {
    const result = evaluateStayDuration(3);

    expect(result.status).toBe("school-dependent");
    expect(result.fiqhDifference).toBe(true);
    expect(result.opinions.length).toBeGreaterThan(0);
  });

  it("handles zero days", () => {
    const result = evaluateStayDuration(0);

    expect(result.status).toBe("school-dependent");
  });
});

/* -------------------------------------------------------------------------- */
/* Full integration                                                            */
/* -------------------------------------------------------------------------- */

describe("Full Travel Checker", () => {
  it("returns a complete traveler result", () => {
    const result = checkTravel(baseTraveler);

    expect(result.success).toBe(true);

    expect(result.travelStatus).toBe(
      TRAVEL_STATUS.TRAVELER
    );

    expect(result.qasr.canShorten).toBe(true);

    expect(result.jam.canCombine).toBe(true);

    expect(result.sources.length).toBeGreaterThan(0);
  });

  it("returns resident result when travel has not started", () => {
    const result = checkTravel({
      ...baseTraveler,
      hasStartedTravel: false,
    });

    expect(result.success).toBe(true);

    expect(result.travelStatus).toBe(
      TRAVEL_STATUS.RESIDENT
    );

    expect(result.qasr.canShorten).toBe(false);
  });

  it("returns ended travel when user returns home", () => {
    const result = checkTravel({
      ...baseTraveler,
      isReturningHome: true,
    });

    expect(result.success).toBe(true);

    expect(result.travelStatus).toBe(
      TRAVEL_STATUS.TRAVEL_ENDED
    );

    expect(result.qasr.canShorten).toBe(false);

    expect(result.jam.canCombine).toBe(false);
  });

  it("handles resident imam correctly", () => {
    const result = checkTravel({
      ...baseTraveler,
      prayingBehindResidentImam: true,
    });

    expect(result.success).toBe(true);

    expect(result.qasr.canShorten).toBe(false);

    expect(result.qasr.code).toBe(
      "BEHIND_RESIDENT_IMAM"
    );
  });
}); 