import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden border-t border-neutral-800 bg-[#080808] py-32"
        >
            {/* BACKGROUND ATMOSPHERE*/}

            <div className="pointer-events-none absolute inset-0">

                {/* Large technical grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                        backgroundSize: "100px 100px",
                        maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                    }}
                />

                {/* Main red atmosphere */}
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
                    className="absolute right-[-20%] top-[20%] h-[800px] w-[800px] rounded-full blur-[180px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(229,57,53,0.2) 0%, transparent 70%)",
                    }}
                />

                {/* Secondary glow */}
                <motion.div
                    animate={{
                        opacity: [0.025, 0.06, 0.025],
                        x: [-30, 30, -30],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[-15%] top-[55%] h-[500px] w-[500px] rounded-full blur-[150px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(229,57,53,0.16) 0%, transparent 70%)",
                    }}
                />

                {/* Structural vertical lines */}
                <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/30 to-transparent" />

                <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/25 to-transparent" />

                {/* Red markers */}
                <div className="absolute left-[8%] top-[15%] h-2 w-2 -translate-x-1/2 rounded-full border border-[#E53935]/60 bg-[#080808]" />

                <div className="absolute right-[8%] top-[42%] h-2 w-2 translate-x-1/2 rounded-full border border-[#E53935]/60 bg-[#080808]" />

                {/* Horizontal structural lines */}
                <div className="absolute left-0 right-0 top-[12%] h-px bg-gradient-to-r from-transparent via-neutral-800/25 to-transparent" />

                <div className="absolute left-0 right-0 bottom-[10%] h-px bg-gradient-to-r from-transparent via-neutral-800/20 to-transparent" />

            </div>

            {/* CONTENT */}

            <div className="relative mx-auto max-w-7xl px-6 lg:px-12 2xl:max-w-[1500px]">

                {/* SECTION HEADER*/}

                <div className="mb-24 flex flex-col justify-between gap-10 md:flex-row md:items-end">

                    <div>

                        {/* Section label */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16 flex items-center gap-4"
                        >
                            <span className="font-mono text-xs tracking-[0.2em] text-[#E53935]">
                                03
                            </span>

                            <span className="h-px w-12 bg-neutral-700" />

                            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                                Selected work
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl 2xl:text-8xl"
                        >
                            THINGS I'VE
                            <br />

                            <span className="text-neutral-300">
                                BUILT<span className="text-[#E53935]">.</span>
                            </span>
                        </motion.h2>

                    </div>

                    {/* Intro */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                        className="max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg"
                    >
                        A selection of projects across web development, games and
                        interactive media — built from concept to implementation.
                    </motion.p>

                </div>

                {/* PROJECTS */}

                <div className="space-y-32">

                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.05,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group"
                        >

                            {/* PROJECT VISUAL*/}

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block overflow-hidden border border-neutral-800 bg-[#101010]"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden">

                                    {/* PROJECT IMAGE*/}

                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                        />
                                    ) : (
                                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0D0D0D]">

                                            {/* Project grid */}
                                            <div
                                                className="absolute inset-0 opacity-[0.065]"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                                                    backgroundSize: "60px 60px",
                                                }}
                                            />

                                            {/* Center radial glow */}
                                            <motion.div
                                                animate={{
                                                    opacity: [0.05, 0.12, 0.05],
                                                    scale: [0.9, 1.08, 0.9],
                                                }}
                                                transition={{
                                                    duration: 5 + index,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute h-[45%] w-[45%] rounded-full bg-[#E53935]/10 blur-[100px]"
                                            />

                                            {/* Large number */}
                                            <motion.span
                                                animate={{
                                                    y: [0, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 6,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="relative font-mono text-[100px] font-bold tracking-[-0.08em] text-neutral-800 transition-colors duration-500 group-hover:text-neutral-700 sm:text-[160px] lg:text-[200px] 2xl:text-[240px]"
                                            >
                                                {project.number}
                                            </motion.span>

                                            {/* Top left identifier */}
                                            <div className="absolute left-6 top-6 flex items-center gap-3">

                                                <span className="h-1.5 w-1.5 rounded-full bg-[#E53935] shadow-[0_0_10px_#E53935]" />

                                                <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-600">
                                                    PROJECT_{project.number}
                                                </span>

                                            </div>

                                            {/* Top right status */}
                                            <div className="absolute right-6 top-6 font-mono text-[10px] tracking-[0.18em] text-neutral-600">
                                                00{index + 1} / SYSTEM
                                            </div>

                                            {/* Bottom left */}
                                            <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.2em] text-neutral-600">
                                                DIGITAL_EXPERIENCE
                                            </div>

                                            {/* Bottom right */}
                                            <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.18em] text-neutral-700">
                                                2026
                                            </div>

                                        </div>
                                    )}

                                    {/* IMAGE OVERLAY */}

                                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

                                    {/* Red frame */}
                                    <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[#E53935]/60" />

                                    {/* Top-left corner */}
                                    <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-transparent transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:border-[#E53935]" />

                                    {/* Bottom-right corner */}
                                    <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-transparent transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:border-[#E53935]" />

                                    {/* VIEW PROJECT */}

                                    <div className="absolute bottom-6 right-6 flex translate-y-5 items-center gap-3 bg-white px-5 py-3.5 text-sm font-medium !text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                        VIEW PROJECT

                                        <ArrowUpRight
                                            size={16}
                                            className="text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />

                                    </div>

                                </div>
                            </a>

                            {/* PROJECT INFORMATION*/}

                            <div className="mt-8 grid gap-10 border-t border-neutral-800 pt-7 md:grid-cols-[1fr_auto] md:items-start">

                                <div>

                                    {/* Metadata */}
                                    <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-neutral-600 sm:text-xs">

                                        <span className="text-[#E53935]">
                                            {project.number}
                                        </span>

                                        <span>/</span>

                                        <span>
                                            {project.category}
                                        </span>

                                        <span>/</span>

                                        <span>
                                            {project.year}
                                        </span>

                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl font-semibold tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[#E53935] sm:text-4xl lg:text-5xl">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                                        {project.description}
                                    </p>

                                </div>

                                {/* TECHNOLOGIES*/}

                                <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">

                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="border border-neutral-800 px-3.5 py-2 font-mono text-[10px] tracking-[0.08em] text-neutral-500 transition-all duration-300 group-hover:border-neutral-700 group-hover:text-neutral-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}

                                </div>

                            </div>

                            {/* PROJECT FOOTER*/}

                            <div className="mt-7 flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-neutral-800 transition-all duration-300 group-hover:w-14 group-hover:bg-[#E53935]" />

                                    <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400">
                                        VIEW CASE
                                    </span>

                                </div>

                                <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-700">
                                    0{index + 1}
                                </span>

                            </div>

                        </motion.article>
                    ))}

                </div>

                {/* BOTTOM STATEMENT*/}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="mt-24 flex flex-col justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row sm:items-center"
                >

                    <span className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                        SELECTED PROJECTS / 2026
                    </span>

                    <span className="font-mono text-xs tracking-[0.2em] text-[#E53935]">
                        03 WORK
                    </span>

                </motion.div>

            </div>
        </section>
    );
}