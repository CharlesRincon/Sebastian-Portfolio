import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-neutral-800 bg-[#090909] py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12 2xl:max-w-[1500px]">

                {/* Section header */}
                <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-20 flex items-center gap-4"
                        >
                            <span className="font-mono text-xs tracking-[0.2em] text-[#7CFF6B]">
                                03
                            </span>

                            <span className="h-px w-12 bg-neutral-700" />

                            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                                Selected work
                            </span>
                        </motion.div>

                        <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl 2xl:text-8xl">
                            THINGS I'VE
                            <br />
                            <span className="text-neutral-600">
                                BUILT.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg">
                        A selection of projects across web development, games and
                        interactive media.
                    </p>
                </div>

                {/* Projects */}
                <div className="space-y-28">

                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="group"
                        >

                            {/* Project image */}
                            <a
                                href={project.link}
                                className="relative block overflow-hidden border border-neutral-800 bg-[#141414]"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden">

                                    {/* Project image */}
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="relative flex h-full w-full items-center justify-center bg-[#0d0d0d]">

                                            {/* Grid */}
                                            <div
                                                className="absolute inset-0 opacity-[0.04]"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                                                    backgroundSize: "50px 50px",
                                                }}
                                            />

                                            {/* Project number */}
                                            <span className="font-mono text-[100px] font-bold tracking-[-0.08em] text-neutral-800 transition-colors duration-500 group-hover:text-neutral-700 sm:text-[160px] lg:text-[200px] 2xl:text-[240px]">
                                                {project.number}
                                            </span>

                                            {/* Project identifier */}
                                            <div className="absolute bottom-6 left-6 font-mono text-xs tracking-[0.2em] text-neutral-500">
                                                PROJECT_{project.number}
                                            </div>

                                            {/* Accent */}
                                            <div className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-[#7CFF6B] opacity-40 shadow-[0_0_10px_#7CFF6B] transition-opacity group-hover:opacity-100" />
                                        </div>
                                    )}

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                                    {/* View project */}
                                    <div className="absolute bottom-6 right-6 flex translate-y-4 items-center gap-2 bg-white px-5 py-3.5 text-sm font-medium !text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        VIEW PROJECT

                                        <ArrowUpRight
                                            size={16}
                                            className="text-black"
                                        />
                                    </div>
                                </div>
                            </a>

                            {/* Project information */}
                            <div className="mt-7 grid gap-8 md:grid-cols-[1fr_auto] md:items-start">

                                <div>

                                    {/* Metadata */}
                                    <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-neutral-500">
                                        <span>{project.number}</span>
                                        <span className="text-neutral-700">/</span>
                                        <span>{project.category}</span>
                                        <span className="text-neutral-700">/</span>
                                        <span>{project.year}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#7CFF6B] sm:text-4xl lg:text-5xl">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="border border-neutral-800 px-3.5 py-2 font-mono text-xs text-neutral-500 transition-colors group-hover:border-neutral-700 group-hover:text-neutral-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
}