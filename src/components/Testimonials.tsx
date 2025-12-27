import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Arlene Stebbins",
    role: "Web Developer, Hearth & Home Technologies",
    relation: "Senior Colleague at JerseySTEM",
    quote:
      "Vijay was the lead designer/developer for a key integration under a very tight timeline. He quickly assessed tools to make our deadline, while deferring long-term analysis until after. The report he prepared answers necessary unasked questions related to reliability under edge scenarios, risks, and failover potentials. Vijay possesses one of the most highly-prized skills in the IT industry -- the ability to execute solid, quality work under pressure.",
  },
  {
    name: "Arista Burtrum",
    role: "President and Founder, The Chad Foundation for Athletes and Artists",
    relation: "Direct Manager",
    quote:
      "I gladly endorse Vijay with the highest recommendation. He has fine-tuned experience in backend infrastructure and an exceptional aptitude for complex problem solving. He is a very proficient, talented developer with a high level of technical reliability.",
  },
  {
    name: "Raj D Kale",
    role: "Software Engineer",
    relation: "Project Collaborator",
    quote:
      "I can confidently say he's one of the most detail-oriented and dependable developers I've collaborated with. Whether it's debugging complex logic or brainstorming scalable solutions, Vijay brings initiative, clarity, and technical depth to a project.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl px-6 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          What People Say 💬
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border bg-slate-800/30 border-slate-700/50 rounded-2xl"
            >
              <FaQuoteLeft className="mb-4 text-2xl text-blue-400" />

              <p className="mb-6 text-sm italic leading-relaxed text-slate-300">
                &quot;{testimonial.quote}&quot;
              </p>

              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-blue-400">{testimonial.role}</p>
                <p className="text-xs uppercase text-slate-500">
                  {testimonial.relation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
