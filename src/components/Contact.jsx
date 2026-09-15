import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden border-t border-neutral-800 bg-[#090909]"
        >
            {/* =========================================================
                BACKGROUND ATMOSPHERE
            ========================================================= */}

            <div className="pointer-events-none absolute inset-0">

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
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

                {/* Main red glow */}
                <motion.div
                    animate={{
                        opacity: [0.05, 0.1, 0.05],
                        scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[-15%] top-[15%] h-[650px] w-[650px] rounded-full blur-[160px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(229,57,53,0.22) 0%, transparent 70%)",
                    }}
                />

                {/* Secondary glow */}
                <motion.div
                    animate={{
                        opacity: [0.025, 0.05, 0.025],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[-20%] bottom-[-10%] h-[500px] w-[500px] rounded-full blur-[150px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(229,57,53,0.14) 0%, transparent 70%)",
                    }}
                />

                {/* Structural vertical lines */}
                <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/30 to-transparent" />

                <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/25 to-transparent" />

                {/* Red marker */}
                <div className="absolute left-[8%] top-[18%] h-2 w-2 -translate-x-1/2 rounded-full border border-[#E53935]/60 bg-[#090909]" />

                {/* Horizontal structural line */}
                <div className="absolute left-0 right-0 top-[13%] h-px bg-gradient-to-r from-transparent via-neutral-800/25 to-transparent" />

            </div>

            {/* =========================================================
                CONTENT
            ========================================================= */}

            <div className="relative mx-auto max-w-7xl px-6 py-40 lg:px-12 2xl:max-w-[1500px]">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 flex items-center gap-4"
                >
                    <span className="font-mono text-xs tracking-[0.2em] text-[#E53935]">
                        05
                    </span>

                    <span className="h-px w-12 bg-neutral-700" />

                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                        Contact
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    {/* =================================================
                        HEADING
                    ================================================= */}

                    <h2 className="relative max-w-6xl text-5xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl 2xl:text-8xl">

                        {/* Subtle glow behind CTA */}
                        <motion.span
                            animate={{
                                opacity: [0.02, 0.05, 0.02],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute -left-20 top-1/2 h-48 w-[500px] -translate-y-1/2 rounded-full bg-[#E53935] blur-[100px]"
                        />

                        <span className="relative">
                            HAVE AN IDEA?
                        </span>

                        <br />

                        <span className="text-neutral-300">
                            LET'S BUILD IT
                            <span className="text-[#E53935]">.</span>
                        </span>

                    </h2>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                        I'm always interested in new projects, collaborations
                        and interesting ideas. Let's talk about what we can create
                        together.
                    </p>

                    {/* =================================================
                        EMAIL CTA
                    ================================================= */}

                    <motion.a
                        href="mailto:sebastianrn646@gmail.com"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                        className="group relative mt-12 inline-flex items-center gap-4 border-b border-neutral-700 pb-4 text-lg text-neutral-200 transition-all duration-300 hover:border-[#E53935] hover:text-white sm:text-xl lg:text-2xl"
                    >

                        {/* Mail icon */}
                        <Mail
                            size={22}
                            strokeWidth={1.5}
                            className="text-neutral-500 transition-all duration-300 group-hover:scale-110 group-hover:text-[#E53935]"
                        />

                        {/* Email */}
                        <span>
                            sebastianrn646@gmail.com
                        </span>

                        {/* Arrow */}
                        <ArrowUpRight
                            size={20}
                            className="text-neutral-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E53935]"
                        />

                        {/* Hover line */}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#E53935] shadow-[0_0_8px_#E53935] transition-all duration-500 group-hover:w-full" />

                    </motion.a>

                    {/* =================================================
                        AVAILABILITY
                    ================================================= */}

                    <div className="mt-14 flex items-center gap-3">

                        <span className="relative flex h-2 w-2">

                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E53935] opacity-30" />

                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E53935] shadow-[0_0_10px_#E53935]" />

                        </span>

                        <span className="font-mono text-xs tracking-[0.18em] text-neutral-500">
                            CURRENTLY AVAILABLE FOR FREELANCE
                        </span>

                    </div>

                </motion.div>

                {/* =========================================================
                    BOTTOM DETAIL
                ========================================================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                    }}
                    className="mt-32 border-t border-neutral-800 pt-6"
                >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                        <span className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            OPEN FOR PROJECTS / COLLABORATIONS
                        </span>

                        <span className="font-mono text-xs tracking-[0.2em] text-[#E53935]">
                            05 CONTACT
                        </span>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}