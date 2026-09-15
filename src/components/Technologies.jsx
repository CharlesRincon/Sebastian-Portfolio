import { motion } from "framer-motion";

const technologies = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "C#",
    "Unity",
    "Git",
    "GitHub",
    "Vite",
    "Photon Fusion",
    "Vuforia",
];

export default function Technologies() {
    return (
        <section
            id="technologies"
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

                {/* Subtle red glow */}
                <motion.div
                    animate={{
                        opacity: [0.04, 0.08, 0.04],
                        scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[-15%] top-[20%] h-[600px] w-[600px] rounded-full blur-[150px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(229,57,53,0.18) 0%, transparent 70%)",
                    }}
                />

                {/* Structural vertical lines */}
                <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/30 to-transparent" />

                <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/25 to-transparent" />

                {/* Red marker */}
                <div className="absolute left-[8%] top-[18%] h-2 w-2 -translate-x-1/2 rounded-full border border-[#E53935]/60 bg-[#090909]" />

            </div>

            {/* =========================================================
                CONTENT
            ========================================================= */}

            <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-12 2xl:max-w-[1500px]">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 flex items-center gap-4"
                >
                    <span className="font-mono text-xs tracking-[0.2em] text-[#E53935]">
                        04
                    </span>

                    <span className="h-px w-12 bg-neutral-700" />

                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                        Technologies
                    </span>
                </motion.div>

                {/* Technology list */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-10 sm:gap-y-6 lg:gap-x-12 lg:gap-y-7"
                >
                    {technologies.map((technology, index) => (
                        <motion.div
                            key={technology}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.04,
                            }}
                            className="group flex cursor-default items-center gap-3"
                        >
                            {/* Small accent */}
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inset-0 rounded-full bg-[#E53935] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70" />

                                <span className="relative h-1.5 w-1.5 rounded-full bg-neutral-800 transition-all duration-300 group-hover:bg-[#E53935] group-hover:shadow-[0_0_10px_#E53935]" />
                            </span>

                            {/* Technology */}
                            <span className="text-2xl font-medium tracking-[-0.03em] text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:text-3xl lg:text-4xl 2xl:text-5xl">
                                {technology}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom information */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                    }}
                    className="mt-24 border-t border-neutral-800 pt-6"
                >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                        <span className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            LANGUAGES / FRAMEWORKS / TOOLS / ENGINES
                        </span>

                        <span className="font-mono text-xs tracking-[0.2em] text-[#E53935]">
                            04
                        </span>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}