import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QasrIntro from "../components/QasrIntro";
import JamIntro from "../components/JamIntro";

function Home() {
  return (
    <div
      id="home"
      dir="rtl"
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#f8f7f2]
        dark:bg-slate-950
      "
    >
      <Navbar />

      <main className="w-full">
        <Hero />

        <QasrIntro />

        <JamIntro />
      </main>
    </div>
  );
}

export default Home;