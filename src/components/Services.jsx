import { Code2, Gamepad2, Monitor, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        number: "01",
        title: "WEB DEVELOPMENT",
        description:
            "Responsive websites, landing pages and modern web applications designed around usability, performance and clear user experiences.",
        icon: Monitor,
        tag: "WEB",
    },
    {
        number: "02",
        title: "SOFTWARE DEVELOPMENT",
        description:
            "Custom software solutions focused on functionality, maintainability and solving specific problems through clean and scalable code.",
        icon: Code2,
        tag: "SOFTWARE",
    },
    {
        number: "03",
        title: "GAME DEVELOPMENT",
        description:
            "Interactive games and gameplay systems developed with Unity and C#, from prototypes and mechanics to polished experiences.",
        icon: Gamepad2,
        tag: "UNITY",
    },
    {
        number: "04",
        title: "INTERACTIVE MEDIA",
        description:
            "Digital experiences combining programming, visual design, interaction and multimedia technologies to create engaging products.",
        icon: Sparkles,
        tag: "INTERACTIVE",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden border-t border-neutral-800 bg-[#090909]"
        >
            {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

            <div className="pointer-events-none absolute inset-0">

                {/* Technical grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
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
                    className="absolute right-[-15%] top-[20%] h-[650px] w-[650px] rounded-full blur-[160px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(229,57,53,0.18) 0%, transparent 70%)",
                    }}
                />

                {/* Left structural line */}
                <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/30 to-transparent" />

                {/* Right structural line */}
                <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-neutral-800/25 to-transparent" />

                {/* Red technical marker */}
                <div className="absolute right-[8%] top-[22%] h-2 w-2 translate-x-1/2 rounded-full border border-[#E53935]/60 bg-[#090909]" />

                {/* Horizontal structural line */}
                <div className="absolute left-0 right-0 top-[14%] h-px bg-gradient-to-r from-transparent via-neutral-800/25 to-transparent" />

            </div>

            {/* =========================================================
          CONTENT
      ========================================================= */}

            <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-12 2xl:max-w-[1500px]">

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
                        02
                    </span>

                    <span className="h-px w-12 bg-neutral-700" />

                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                        What I do
                    </span>
                </motion.div>

                {/* =======================================================
            INTRO
        ======================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 max-w-4xl"
                >
                    <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl 2xl:text-8xl">
                        FROM IDEA
                        <br />
                        TO{" "}
                        <span className="text-[#E53935]">
                            INTERACTION.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                        I build digital products across different mediums, combining
                        engineering, creativity and interaction to turn ideas into
                        functional experiences.
                    </p>
                </motion.div>

                {/* =======================================================
            SERVICES GRID
        ======================================================= */}

                <div className="grid border-t border-neutral-800 md:grid-cols-2">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="group relative border-b border-neutral-800 p-8 md:p-10 lg:p-12 md:[&:nth-child(odd)]:border-r"
                            >

                                {/* =================================================
                    HOVER BACKGROUND
                ================================================= */}

                                <div className="pointer-events-none absolute inset-0 bg-white/[0.018] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* =================================================
                    RED TOP ACCENT
                ================================================= */}

                                <div className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[#E53935] transition-transform duration-500 group-hover:scale-x-100" />

                                {/* =================================================
                    RED SIDE ACCENT
                ================================================= */}

                                <div className="pointer-events-none absolute bottom-0 left-0 h-0 w-px bg-[#E53935] transition-all duration-500 group-hover:h-12" />

                                <div className="relative">

                                    {/* =================================================
                      HEADER
                  ================================================= */}

                                    <div className="mb-16 flex items-start justify-between">

                                        {/* Number */}
                                        <div className="flex items-center gap-4">

                                            <span className="font-mono text-xs tracking-[0.15em] text-[#E53935]">
                                                {service.number}
                                            </span>

                                            <span className="h-px w-8 bg-neutral-800 transition-all duration-300 group-hover:w-12 group-hover:bg-[#E53935]" />

                                        </div>

                                        {/* Icon */}
                                        <div className="relative flex h-12 w-12 items-center justify-center border border-neutral-800 transition-all duration-300 group-hover:border-[#E53935] group-hover:bg-[#E53935]">

                                            <Icon
                                                size={22}
                                                strokeWidth={1}
                                                className="text-neutral-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                                            />

                                        </div>

                                    </div>

                                    {/* =================================================
                      TITLE
                  ================================================= */}

                                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-neutral-100 sm:text-3xl lg:text-4xl">
                                        {service.title}
                                    </h3>

                                    {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                                    <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg">
                                        {service.description}
                                    </p>

                                    {/* =================================================
                      BOTTOM METADATA
                  ================================================= */}

                                    <div className="mt-12 flex items-center justify-between border-t border-neutral-800 pt-5">

                                        {/* Availability */}
                                        <div className="flex items-center gap-3">

                                            <span className="relative flex h-2 w-2">

                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E53935] opacity-30" />

                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E53935] shadow-[0_0_8px_#E53935]" />

                                            </span>

                                            <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400">
                                                AVAILABLE
                                            </span>

                                        </div>

                                        {/* Service tag */}
                                        <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-700 transition-colors duration-300 group-hover:text-[#E53935]">
                                            {service.tag}
                                        </span>

                                    </div>

                                </div>
                            </motion.article>
                        );
                    })}

                </div>

                {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="mt-16 flex flex-col justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row sm:items-center"
                >

                    <span className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                        ENGINEERING × DESIGN × INTERACTION
                    </span>

                    <span className="font-mono text-xs tracking-[0.2em] text-[#E53935]">
                        04 SERVICES
                    </span>

                </motion.div>

            </div>
        </section>
    );
}