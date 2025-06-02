import BackgroundParticles from "@/components/BackgroundParticles";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <main className="px-6 py-16 sm:px-20 text-center sm:text-left">
        <Hero />
      </main>
    </>
  );
}
