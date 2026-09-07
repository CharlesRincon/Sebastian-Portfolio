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
            className="border-t border-neutral-800 bg-[#090909]"
        >
            <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 2xl:max-w-[1500px]">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 flex items-center gap-4"
                >
                    <span className="font-mono text-xs tracking-[0.2em] text-[#7CFF6B]">
                        04
                    </span>

                    <span className="h-px w-12 bg-neutral-700" />

                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                        Technologies
                    </span>
                </motion.div>

                {/* Technology list */}
                <div className="flex flex-wrap gap-x-8 gap-y-5 sm:gap-x-10 sm:gap-y-6 lg:gap-x-12 lg:gap-y-7">

                    {technologies.map((technology, index) => (
                        <motion.span
                            key={technology}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.04,
                            }}
                            className="cursor-default text-2xl font-medium tracking-[-0.03em] text-neutral-400 transition-all duration-300 hover:text-white sm:text-3xl lg:text-4xl 2xl:text-5xl"
                        >
                            {technology}
                        </motion.span>
                    ))}

                </div>

                {/* Bottom information */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24 border-t border-neutral-800 pt-6"
                >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <span className="font-mono text-xs tracking-[0.2em] text-neutral-500">
                            TOOLS / FRAMEWORKS / ENGINES
                        </span>

                        <span className="font-mono text-xs tracking-[0.2em] text-neutral-500">
                            04
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}