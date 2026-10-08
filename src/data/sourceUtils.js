import sources from "./sources";

export function getSourcesByIds(sourceIds = []) {
  return sourceIds
    .map((id) => sources[id])
    .filter(Boolean);
}

export function getSourceById(sourceId) {
  return sources[sourceId] || null; 
}