import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-neutral-800 bg-[#090909]"
        >
            <div className="mx-auto max-w-7xl px-6 py-40 lg:px-12 2xl:max-w-[1500px]">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 flex items-center gap-4"
                >
                    <span className="font-mono text-xs tracking-[0.2em] text-[#7CFF6B]">
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
                    {/* Heading */}
                    <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl 2xl:text-8xl">
                        HAVE AN IDEA?
                        <br />

                        <span className="text-neutral-600">
                            LET'S BUILD IT.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                        I'm always interested in new projects, collaborations
                        and interesting ideas. Let's talk about what we can create.
                    </p>

                    {/* Email CTA */}
                    <a
                        href="mailto:hello@example.com"
                        className="group mt-12 inline-flex items-center gap-4 border-b border-neutral-700 pb-4 text-lg text-neutral-200 transition-colors hover:border-[#7CFF6B] hover:text-white sm:text-xl lg:text-2xl"
                    >
                        <Mail
                            size={22}
                            strokeWidth={1.5}
                            className="text-neutral-400 transition-colors group-hover:text-[#7CFF6B]"
                        />

                        <span>
                            sebastianrn646@gmail.com
                        </span>

                        <ArrowUpRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>
                </motion.div>

                {/* Bottom detail */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-32 border-t border-neutral-800 pt-6"
                >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <span className="font-mono text-xs tracking-[0.2em] text-neutral-500">
                            OPEN FOR PROJECTS / COLLABORATIONS
                        </span>

                        <span className="font-mono text-xs tracking-[0.2em] text-neutral-500">
                            05
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}