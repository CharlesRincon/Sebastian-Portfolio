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
      className="border-t border-neutral-800 bg-[#090909] py-32"
    >
      <div className="mx-auto max-w-7xl px-6 2xl:max-w-[1500px] lg:px-12">

        {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 flex items-center gap-4"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#7CFF6B]">
              01
            </span>

            <span className="h-px w-12 bg-neutral-700" />

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              About
            </span>
          </motion.div>

        {/* Main statement */}
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
          <span className="text-neutral-600">
            PEOPLE CAN INTERACT WITH.
          </span>
        </motion.h2>

        {/* Content */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              I'm a Multimedia Engineer and Software Developer focused on
              creating digital products that combine technology, creativity
              and interaction.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500">
              My experience spans web development, software, game development
              and interactive experiences. I enjoy turning ideas into
              functional products while paying attention to both the technical
              implementation and the experience of the people using them.
            </p>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 border-b border-neutral-700 pb-2 font-mono text-xs tracking-[0.18em] text-neutral-400 transition-colors hover:border-[#7CFF6B] hover:text-white"
            >
              LET'S WORK TOGETHER

              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          {/* Profile information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border-t border-neutral-800"
          >
            {/* Role */}
            <div className="flex items-center justify-between border-b border-neutral-800 py-5">
              <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
                ROLE
              </span>

              <span className="text-sm text-neutral-300 sm:text-base">
                Multimedia Engineer
              </span>
            </div>

            {/* Focus */}
            <div className="flex items-center justify-between border-b border-neutral-800 py-5">
              <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
                FOCUS
              </span>

              <span className="text-right text-sm text-neutral-300 sm:text-base">
                Software & Interactive Media
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-between border-b border-neutral-800 py-5">
              <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
                BASE
              </span>

              <span className="text-sm text-neutral-300 sm:text-base">
                Colombia
              </span>
            </div>

            {/* Skills */}
            <div className="py-8">
              <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
                AREAS
              </span>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white sm:text-base"
                  >
                    <span className="font-mono text-[10px] text-neutral-600 transition-colors group-hover:text-[#7CFF6B]">
                      0{index + 1}
                    </span>

                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-32 border-t border-neutral-800 pt-6"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <span className="font-mono text-[10px] tracking-[0.22em] text-neutral-600">
              TECHNOLOGY × CREATIVITY × INTERACTION
            </span>

            <span className="font-mono text-[10px] tracking-[0.22em] text-neutral-600">
              01
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}