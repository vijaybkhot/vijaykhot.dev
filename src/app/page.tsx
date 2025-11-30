import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* 1. HERO SECTION */}
      <main className="flex items-center justify-center flex-1 px-6 py-10 text-center sm:px-20 sm:text-left">
        <Hero />
      </main>

      {/* 2. EXPERIENCE SECTION (The Authority Proof) */}
      <Experience />

      {/* 3. FEATURED WORK (The Technical Proof) */}
      <FeaturedWork />
    </div>
  );
}
