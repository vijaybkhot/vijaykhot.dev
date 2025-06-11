"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xvgroogw", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 pt-8">
      <div className="w-full max-w-md ">
        <h1 className="mb-1.5 text-3xl font-bold text-center text-blue-500 sm:text-3xl">
          Get in Touch
        </h1>

        <p className="mb-4 text-sm leading-relaxed text-center text-slate-300">
          Whether you are a recruiter with an opportunity, a developer looking
          to collaborate, or just want to say hi — I would love to hear from
          you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="p-5 space-y-4 border shadow-xl bg-slate-900/70 rounded-xl border-slate-700"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-slate-200"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-white border rounded-lg bg-slate-800 border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-white border rounded-lg bg-slate-800 border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium text-slate-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-white border rounded-lg bg-slate-800 border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2.5 font-medium text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="mt-2 text-center text-green-500">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="mt-2 text-center text-red-500">
              Oops! Something went wrong.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
