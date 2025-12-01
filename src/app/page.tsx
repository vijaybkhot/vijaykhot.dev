import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* 1. HERO SECTION (The First Impression) */}{" "}
      <main className="flex items-start justify-center flex-1 px-4 pt-20 pb-10 text-center sm:pt-24 md:items-center md:pt-24 sm:px-20 sm:text-left">
        <Hero />
      </main>
      {/* 2. EXPERIENCE SECTION (The Authority Proof) */}
      <Experience />
      {/* 3. FEATURED WORK (The Technical Proof) */}
      <FeaturedWork />
      {/* 4. CLOSING CTA (The "Deal Closer") */}
      <section className="max-w-3xl px-6 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Ready to build scalable systems?
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-slate-400">
          I am currently open to Backend, ML Infrastructure, and Fullstack
          roles. If you have an engineering challenge that needs a robust
          solution, let&apos;s talk.
        </p>
        <ButtonLink href="/contact" label="Get in Touch" variant="primary" />
      </section>
    </div>
  );
}
