"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Rocket, HeadsetIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deeply understand your business goals, existing infrastructure, and technical challenges to create a strategic roadmap.",
    cta: "Learn Our Process",
    icon: Search,
    gradient: "from-brand-primary/40 via-orange-500/20 to-amber-500/10",
    accent: "bg-brand-primary",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Our architects design scalable, secure, and high-performance solutions built for reliability and future growth.",
    cta: "See Our Solutions",
    icon: PenTool,
    gradient: "from-cyan-500/40 via-blue-500/20 to-indigo-500/10",
    accent: "bg-cyan-400",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "We execute with precision — agile sprints, rigorous QA testing, and seamless zero-downtime deployments.",
    cta: "View Our Work",
    icon: Rocket,
    gradient: "from-brand-primary/40 via-orange-500/20 to-rose-500/10",
    accent: "bg-brand-primary",
  },
  {
    number: "04",
    title: "Support",
    description:
      "24/7 monitoring, proactive maintenance, and continuous optimization to keep systems at peak performance.",
    cta: "Get In Touch",
    icon: HeadsetIcon,
    gradient: "from-cyan-500/40 via-teal-500/20 to-emerald-500/10",
    accent: "bg-cyan-400",
  },
];

// Per-card scroll-driven transforms matching Joby Aviation pattern:
// Entry: tiny tilted thumbnail in bottom-right → grows to center
// Exit: center → shrinks to tiny tilted thumbnail in top-left
function useCardTransforms(scrollYProgress: MotionValue<number>, index: number, total: number) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const enterDone = start + segmentSize * 0.45;
  const exitStart = start + segmentSize * 0.85;
  const end = start + segmentSize;
  const exitDone = Math.min(end + segmentSize * 0.15, 1);

  const isLast = index === total - 1;

  // ENTER: from bottom-right as tiny tilted thumbnail
  const enterY = useTransform(scrollYProgress, [start, enterDone], [450, 0]);
  const enterX = useTransform(scrollYProgress, [start, enterDone], [500, 0]);
  const enterScale = useTransform(scrollYProgress, [start, enterDone], [0.12, 1]);
  const enterRotate = useTransform(scrollYProgress, [start, enterDone], [15, 0]);
  const enterOpacity = useTransform(scrollYProgress, [start, start + segmentSize * 0.08], [0, 1]);

  // SHIFT LEFT: after expansion, move card left to make room for text
  // We offset it based on the flex-layout (approx 22% of container width to center it)
  const textStart = enterDone + segmentSize * 0.05;
  const textDone = enterDone + segmentSize * 0.35;
  const shiftX = useTransform(scrollYProgress, [enterDone, textDone], [300, 0]); // 300px offset to center 48% card in 1152px container

  // EXIT: shrink to tiny tilted thumbnail in top-left
  // For the last card, we still let it exit so the text hides before un-sticking
  const exitY = useTransform(scrollYProgress, [exitStart, exitDone], [0, -320]);
  const exitX = useTransform(scrollYProgress, [exitStart, exitDone], [0, -480 - index * 60]);
  const exitScale = useTransform(scrollYProgress, [exitStart, exitDone], [1, 0.12]);
  const exitRotate = useTransform(scrollYProgress, [exitStart, exitDone], [0, -12 + index * 2]);
  const exitOpacity = useTransform(scrollYProgress, [exitStart, exitDone], [1, 0.6]);

  // Combined transforms
  const y = useTransform(scrollYProgress, (v) => {
    if (v < enterDone) return enterY.get();
    if (v >= exitStart) return exitY.get();
    return 0;
  });
  const x = useTransform(scrollYProgress, (v) => {
    if (v < enterDone) return enterX.get() + 300; // Enter into center (offset)
    if (v < exitStart) return shiftX.get(); // Shift left to natural position
    return exitX.get();
  });
  const scale = useTransform(scrollYProgress, (v) => {
    if (v < enterDone) return enterScale.get();
    if (v >= exitStart) return exitScale.get();
    return 1;
  });
  const rotate = useTransform(scrollYProgress, (v) => {
    if (v < enterDone) return enterRotate.get();
    if (v >= exitStart) return exitRotate.get();
    return 0;
  });
  const opacity = useTransform(scrollYProgress, (v) => {
    if (v < start + segmentSize * 0.08) return enterOpacity.get();
    if (v >= exitStart) return exitOpacity.get();
    return 1;
  });

  // Border radius: when thumbnail → more rounded (square), when active → less rounded (rect)
  const borderRadius = useTransform(scrollYProgress, (v) => {
    if (v < enterDone) {
      const progress = (v - start) / (enterDone - start);
      return `${32 - progress * 12}px`;
    }
    if (v >= exitStart) {
      const progress = Math.min((v - exitStart) / (exitDone - exitStart), 1);
      return `${20 + progress * 12}px`;
    }
    return "20px";
  });

  // Text: visible only after card has finished expanding (zoom out) into the center
  const textExitStart = exitStart - segmentSize * 0.1;

  const textOpacity = useTransform(
    scrollYProgress,
    [textStart, textDone, textExitStart, exitStart],
    [0, 1, 1, 0]
  );
  const textY = useTransform(scrollYProgress, [textStart, textDone], [40, 0]);

  return { y, x, scale, rotate, opacity, borderRadius, textOpacity, textY };
}

export default function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Header slides up and fades
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -300]);

  // Bottom labels
  const bottomOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0, 1]);

  return (
    <section ref={sectionRef} className="relative bg-bg-deep">
      <div style={{ height: `${(STEPS.length + 1) * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-bg-deep" />

          {/* Header — slides up on scroll */}
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-6"
          >
            <p className="text-xs font-black tracking-[0.4em] uppercase text-brand-primary/60 mb-6">
              How We Work
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] text-center text-white">
              From Challenges to
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">
                Scalable Solutions
              </span>
            </h2>
          </motion.div>

          {/* Bottom labels */}
          <motion.div
            style={{ opacity: bottomOpacity }}
            className="absolute bottom-8 left-8 right-8 flex justify-between z-10 pointer-events-none"
          >
            <span className="text-xs font-black tracking-[0.3em] uppercase text-gray-600">
              Our Process
            </span>
            <Link
              href="/contact"
              className="text-xs font-black tracking-[0.3em] uppercase text-gray-600 hover:text-white transition-colors pointer-events-auto"
            >
              Start Your Journey
            </Link>
          </motion.div>

          {/* Cards layer */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {STEPS.map((step, idx) => (
              <CardSlide
                key={idx}
                step={step}
                index={idx}
                total={STEPS.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CardSlide({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: (typeof STEPS)[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const { y, x, scale, rotate, opacity, borderRadius, textOpacity, textY } =
    useCardTransforms(scrollYProgress, index, total);

  return (
    <motion.div
      style={{ y, x, scale, rotate, opacity }}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-14 pointer-events-auto">
        {/* Visual card — less tall, centered during zoom */}
        <motion.div
          style={{ borderRadius }}
          className="w-full md:w-[48%] relative overflow-hidden max-h-[60vh] md:max-h-[65vh]"
        >
          <div
            className={`w-full aspect-[16/11] bg-gradient-to-br ${step.gradient} border border-white/[0.08] relative overflow-hidden`}
            style={{ borderRadius: "inherit" }}
          >
            {/* Background number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[14rem] md:text-[18rem] font-black text-white/[0.04] select-none leading-none">
                {step.number}
              </span>
            </div>
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] bg-white/[0.06] border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <step.icon className="w-14 h-14 md:w-18 md:h-18 text-white/30" strokeWidth={1} />
              </div>
            </div>
            {/* Dots */}
            <div className={`absolute top-8 right-8 w-3 h-3 rounded-full ${step.accent} opacity-40`} />
            <div className={`absolute bottom-10 left-10 w-2 h-2 rounded-full ${step.accent} opacity-30`} />
          </div>
        </motion.div>

        {/* Text — right side, like Joby */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="w-full md:w-[44%]"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-2 h-2 rounded-full ${step.accent}`} />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-gray-500">
              Step {step.number}
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-5 text-white">
            {step.title}
          </h3>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
            {step.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm font-bold text-white/80 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-all duration-300 group"
          >
            {step.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
