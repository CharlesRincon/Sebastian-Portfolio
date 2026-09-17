import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const skills = [
  "Web Development",
  "Software Development",
  "Game Development",
  "Interactive Media",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#0B0B0B] py-32"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />

        {/* Ambient red glow */}
        <motion.div
          animate={{
            opacity: [0.06, 0.11, 0.06],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[25%] h-[600px] w-[600px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(229,57,53,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Structural vertical lines */}
        <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/40 to-transparent" />

        <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/30 to-transparent" />

        {/* Small red marker */}
        <div className="absolute left-[8%] top-[18%] h-2 w-2 -translate-x-1/2 rounded-full border border-[#E53935]/70 bg-[#0B0B0B]" />

        {/* Horizontal structural line */}
        <div className="absolute left-0 right-0 top-[12%] h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent" />

      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 2xl:max-w-[1500px]">

        {/* =======================================================
            SECTION LABEL
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#E53935]">
            01
          </span>

          <span className="h-px w-12 bg-neutral-700" />

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            About
          </span>
        </motion.div>

        {/* =======================================================
            MAIN STATEMENT
        ======================================================= */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl 2xl:text-8xl"
        >
          I'M INTERESTED IN
          <br />

          BUILDING THINGS
          <br />

          <span className="text-[#E53935]">
            PEOPLE CAN INTERACT WITH.
          </span>
        </motion.h2>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

          {/* =====================================================
              PHOTO + IDENTITY
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Identity */}
            <div className="mb-6">
              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-[#E53935] shadow-[0_0_10px_#E53935]" />

                <p className="font-mono text-sm font-medium tracking-[0.2em] text-white">
                  SEBASTIAN RINCÓN
                </p>

              </div>

              <p className="mt-2 pl-5 text-base text-neutral-400 sm:text-lg">
                Multimedia Engineer / Software Developer
              </p>
            </div>

            {/* Photo */}
            <div className="group relative aspect-[4/5] w-full max-w-md overflow-hidden border border-neutral-800 bg-[#101010]">

              <img
                src="/images/CV%20-%20Juan%20Sebastian%20Rinc%C3%B3n.png"
                alt="Sebastian Rincón portrait"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/10" />

              {/* =================================================
                  TOP LEFT INDICATOR
              ================================================= */}

              <div className="absolute left-5 top-5 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#E53935] shadow-[0_0_10px_#E53935]" />

                <span className="font-mono text-[10px] tracking-[0.15em] text-neutral-600">
                  PROFILE
                </span>

              </div>

              {/* =================================================
                  TOP RIGHT CORNER
              ================================================= */}

              <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-neutral-700 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:border-[#E53935]" />

              {/* =================================================
                  LEFT SIDE MARKER
              ================================================= */}

              <div className="absolute bottom-1/2 left-0 h-16 w-px bg-gradient-to-b from-transparent via-[#E53935]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* =================================================
                  BOTTOM METADATA
              ================================================= */}

              <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-[0.15em] text-neutral-600">

                <span>
                  SEBASTIAN_R
                </span>

                <span>
                  001
                </span>

              </div>

              {/* =================================================
                  BOTTOM RED LINE
              ================================================= */}

              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="absolute bottom-0 left-0 h-px bg-[#E53935]"
              />

              {/* =================================================
                  HOVER BORDER
              ================================================= */}

              <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-neutral-600" />

            </div>
          </motion.div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="flex flex-col justify-center"
          >

            {/* Main paragraph */}
            <p className="max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
              I'm a Multimedia Engineer and Software Developer focused on
              creating digital products that combine technology, creativity
              and interaction.
            </p>

            {/* Secondary paragraph */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              My experience spans web development, software, game development
              and interactive experiences. I enjoy turning ideas into
              functional products while paying attention to both the technical
              implementation and the experience of the people using them.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-neutral-700 pb-2 font-mono text-xs tracking-[0.18em] text-neutral-400 transition-colors duration-300 hover:border-[#E53935] hover:text-white"
            >
              LET'S WORK TOGETHER

              <ArrowDownRight
                size={15}
                className="transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#E53935]"
              />
            </a>

            {/* Approach */}
            <div className="mt-16 border-l border-[#E53935] pl-5">

              <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">
                APPROACH
              </p>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
                Technology should not only work — it should create an
                experience worth remembering.
              </p>

            </div>

          </motion.div>
        </div>

        {/* =======================================================
            PROFILE INFORMATION
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-24 border-t border-neutral-800"
        >

          {/* Profile details */}
          <div className="grid lg:grid-cols-3">

            {/* ROLE */}
            <div className="flex items-center justify-between border-b border-neutral-800 py-6 lg:border-r lg:px-8 lg:first:pl-0">

              <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
                ROLE
              </span>

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />

                <span className="text-sm text-neutral-300 sm:text-base">
                  Multimedia Engineer
                </span>

              </div>
            </div>

            {/* FOCUS */}
            <div className="flex items-center justify-between border-b border-neutral-800 py-6 lg:border-r lg:px-8">

              <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
                FOCUS
              </span>

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />

                <span className="text-right text-sm text-neutral-300 sm:text-base">
                  Software & Interactive Media
                </span>

              </div>
            </div>

            {/* BASE */}
            <div className="flex items-center justify-between border-b border-neutral-800 py-6 lg:pl-8">

              <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
                BASE
              </span>

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />

                <span className="text-sm text-neutral-300 sm:text-base">
                  Colombia
                </span>

              </div>
            </div>

          </div>

          {/* =====================================================
              AREAS
          ===================================================== */}

          <div className="py-8">

            <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
              AREAS
            </span>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white sm:text-base"
                >

                  <span className="font-mono text-[10px] text-neutral-600 transition-colors group-hover:text-[#E53935]">
                    0{index + 1}
                  </span>

                  <span>
                    {skill}
                  </span>

                </div>
              ))}

            </div>
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="mt-24 border-t border-neutral-800 pt-6"
        >

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <span className="font-mono text-xs tracking-[0.22em] text-neutral-500">
              TECHNOLOGY × CREATIVITY × INTERACTION
            </span>

            <span className="font-mono text-xs tracking-[0.22em] text-[#E53935]">
              01
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}