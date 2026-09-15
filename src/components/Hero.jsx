import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#090909]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.7) 45%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.7) 45%, transparent 85%)",
          }}
        />

        {/* Large ambient red field */}
        <motion.div
          animate={{
            opacity: [0.12, 0.2, 0.12],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-15%] top-[5%] h-[700px] w-[700px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(229,57,53,0.22) 0%, rgba(229,57,53,0.08) 40%, transparent 72%)",
          }}
        />

        {/* Secondary dark red field */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            x: [-20, 20, -20],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[45%] h-[500px] w-[500px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(229,57,53,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Vertical technical lines */}
        <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/40 to-transparent" />

        <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/30 to-transparent" />

        {/* Red signal line */}
        <motion.div
          animate={{
            opacity: [0, 0.35, 0],
            scaleY: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[20%] h-[180px] w-px origin-center bg-[#E53935] shadow-[0_0_12px_rgba(229,57,53,0.5)]"
        />

        {/* Horizontal structural line */}
        <div className="absolute left-0 right-0 top-[18%] h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent" />

        {/* Small red coordinate marker */}
        <div className="absolute right-[7.7%] top-[18%] h-2 w-2 rounded-full border border-[#E53935]/60 bg-[#090909]" />

      </div>

      {/* Ambient red glow */}
      <motion.div
        animate={{
          opacity: [0.18, 0.3, 0.18],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[550px] w-[550px] rounded-full bg-[#E53935]/10 blur-[130px]"
      />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 2xl:max-w-[1500px] 2xl:grid-cols-[1fr_0.95fr] 2xl:gap-16">
        <div>
          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#E53935]" />

              <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-white">
                Sebastián Rincón
              </p>
            </div>

            <p className="mt-3 pl-11 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              Multimedia Engineer / Software Developer
            </p>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E53935] opacity-40" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E53935] shadow-[0_0_12px_#E53935]" />
            </span>

            Available for freelance

            <span className="text-neutral-700">/</span>

            <span className="text-neutral-500">2026</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Red glow behind heading */}
            <motion.div
              animate={{
                opacity: [0.35, 0.90, 0.35],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -left-32 top-1/2 h-[320px] w-[750px] -translate-y-1/2 blur-[80px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(229,57,53,0.65) 0%, rgba(229,57,53,0.35) 35%, rgba(229,57,53,0.12) 60%, transparent 78%)",
              }}
            />

            <h1 className="relative text-6xl font-bold leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem] 2xl:text-[7.5rem]">
              I BUILD
              <br />

              <span className="text-[#E53935]">
                DIGITAL
              </span>

              <br />

              <span className="relative inline-block">
                EXPERIENCES

                <span className="absolute -right-3 bottom-1 h-2 w-2 bg-[#E53935] shadow-[0_0_12px_#E53935] sm:-right-4 sm:h-3 sm:w-3" />
              </span>

            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            I'm a Multimedia Engineer and Software Developer focused on
            building digital products across the web, software and game
            development.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="group flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-medium !text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#E53935] hover:!text-white"
            >
              VIEW MY WORK

              <ArrowUpRight
                size={17}
                className="text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="group flex items-center gap-3 border border-neutral-700 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#E53935] hover:text-[#E53935]"
            >
              CONTACT

              <span className="h-1.5 w-1.5 rounded-full bg-neutral-700 transition-colors duration-300 group-hover:bg-[#E53935]" />
            </a>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs tracking-[0.18em]"
          >
            <span className="text-neutral-400">WEB</span>

            <span className="text-neutral-700">/</span>

            <span className="text-neutral-400">SOFTWARE</span>

            <span className="text-neutral-700">/</span>

            <span className="text-neutral-400">GAMES</span>

            <span className="text-neutral-700">/</span>

            <span className="text-neutral-400">INTERACTIVE MEDIA</span>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative lg:translate-x-6 2xl:translate-x-10">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-500 transition-colors duration-300 hover:text-white"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown
          size={15}
          className="transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#E53935]"
        />
      </a>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </section>
  );
}