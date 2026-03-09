"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    role: "CTO, FinSecure Banking",
    quote: "Siddhi Soft World transformed our entire banking infrastructure. Their expertise in server management and disaster recovery gave us the confidence to scale our operations across 50+ branches with zero downtime.",
    rating: 5,
    initials: "RM",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Priya Sharma",
    role: "Director of IT, GovTech Solutions",
    quote: "Working with their team was a game-changer. They modernized our legacy systems seamlessly, migrated our Active Directory forests, and delivered a solution that was both secure and incredibly efficient.",
    rating: 5,
    initials: "PS",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Amit Patel",
    role: "Founder, AgriFlow Technologies",
    quote: "Their agile methodology is second to none. What impressed us most was the transparency — weekly syncs, real-time access to the dev team, and a product delivered 2 weeks ahead of schedule.",
    rating: 5,
    initials: "AP",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    name: "Sneha Kapoor",
    role: "VP Engineering, RetailNova",
    quote: "From concept to deployment, Siddhi Soft World delivered a high-performance e-commerce platform that handles 100K+ daily transactions flawlessly. Their post-deployment support is exceptional.",
    rating: 5,
    initials: "SK",
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "Vikram Desai",
    role: "Managing Director, HospitalityPro",
    quote: "They didn't just build us a website — they engineered a complete digital ecosystem. Our booking system, CRM integration, and analytics dashboard all work in perfect harmony.",
    rating: 5,
    initials: "VD",
    color: "from-rose-500 to-rose-600"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">
            What Our Clients{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">
              Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Real stories from real partners. Discover why businesses trust Siddhi Soft World to power their digital transformation.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative p-10 md:p-14 rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#0a1628] to-[#0f1d35] shadow-2xl overflow-hidden h-[420px] flex flex-col">
                {/* Decorative Quote */}
                <div className="absolute top-8 right-8 opacity-5">
                  <Quote className="w-32 h-32" />
                </div>

                {/* Decorative Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`} />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote - takes remaining space */}
                <blockquote className="text-xl md:text-2xl font-bold text-white/90 leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author - pinned to bottom */}
                <div className="flex items-center gap-5 mt-8">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-lg font-black shadow-lg shrink-0`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 font-medium text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 bg-gradient-to-br from-[#0a1628] to-[#0f1d35] flex items-center justify-center hover:border-white/30 hover:from-[#0d1a30] hover:to-[#14243f] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Dots - Center */}
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === current 
                      ? "w-10 bg-brand-primary" 
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 bg-gradient-to-br from-[#0a1628] to-[#0f1d35] flex items-center justify-center hover:border-white/30 hover:from-[#0d1a30] hover:to-[#14243f] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
