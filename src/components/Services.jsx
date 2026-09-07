import { Code2, Gamepad2, Monitor, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        number: "01",
        title: "WEB DEVELOPMENT",
        description:
            "Responsive websites, landing pages and modern web applications designed around usability and performance.",
        icon: Monitor,
    },
    {
        number: "02",
        title: "SOFTWARE DEVELOPMENT",
        description:
            "Custom software solutions focused on functionality, maintainability and solving specific problems.",
        icon: Code2,
    },
    {
        number: "03",
        title: "GAME DEVELOPMENT",
        description:
            "Interactive games and gameplay systems developed with Unity and C#, from prototypes to polished experiences.",
        icon: Gamepad2,
    },
    {
        number: "04",
        title: "INTERACTIVE MEDIA",
        description:
            "Digital experiences combining programming, visual design, interaction and multimedia technologies.",
        icon: Sparkles,
    },
];

export default function Services() {
    return (
        <section
            id="services"
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
                        02
                    </span>

                    <span className="h-px w-12 bg-neutral-700" />

                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                        What I do
                    </span>
                </motion.div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="group border-b border-neutral-800 p-8 md:p-10 lg:p-12 first:border-t md:nth-[2]:border-t"
                            >

                                {/* Header */}
                                <div className="mb-14 flex items-start justify-between">
                                    <span className="font-mono text-xs tracking-[0.15em] text-neutral-500">
                                        {service.number}
                                    </span>

                                    <Icon
                                        size={24}
                                        strokeWidth={1}
                                        className="text-neutral-500 transition-all duration-300 group-hover:scale-110 group-hover:text-[#7CFF6B]"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg">
                                    {service.description}
                                </p>

                                {/* Bottom indicator */}
                                <div className="mt-10 flex items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#7CFF6B]" />

                                    <span className="font-mono text-xs tracking-[0.2em] text-neutral-500">
                                        AVAILABLE
                                    </span>
                                </div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}