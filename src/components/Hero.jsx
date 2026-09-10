import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 py-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 2xl:max-w-[1500px] 2xl:grid-cols-[1fr_0.95fr] 2xl:gap-12">

        <div>
          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7"
          >
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Juan Sebastian Rincón
            </p>

            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
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
            <span className="h-2 w-2 rounded-full bg-[#7CFF6B] shadow-[0_0_12px_#7CFF6B]" />

            Available for freelance

            <span className="text-neutral-600">
              /
            </span>

            2026
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[5.5rem] 2xl:text-[7.5rem]"
          >
            I BUILD
            <br />

            <span className="text-neutral-600">
              DIGITAL
            </span>

            <br />

            EXPERIENCES.
          </motion.h1>

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
            <a
              href="#projects"
              className="group flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-medium !text-black transition-transform hover:-translate-y-1"
            >
              VIEW MY WORK

              <ArrowUpRight
                size={17}
                className="text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="border border-neutral-700 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-neutral-400"
            >
              CONTACT
            </a>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 font-mono text-xs tracking-[0.2em] text-neutral-500"
          >
            WEB / SOFTWARE / GAMES / INTERACTIVE MEDIA
          </motion.div>
        </div>

        {/* Visual */}
        <HeroVisual />
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-300"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={15} />
      </a>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </section>
  );
}