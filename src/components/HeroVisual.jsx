import { motion } from "framer-motion";

export default function HeroVisual() {
    return (
        <div className="relative flex h-[420px] w-full items-center justify-center lg:h-[540px] 2xl:h-[640px]">

            {/* Ambient red glow */}
            <motion.div
                animate={{
                    opacity: [0.18, 0.3, 0.18],
                    scale: [0.9, 1.08, 0.9],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute h-48 w-48 rounded-full bg-[#E53935]/20 blur-[80px] lg:h-64 lg:w-64 2xl:h-80 2xl:w-80"
            />

            {/* Outer rotating system */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-72 w-72 rounded-full border border-neutral-800 lg:h-[400px] lg:w-[400px] 2xl:h-[480px] 2xl:w-[480px]"
            >
                {/* Main orbit marker */}
                <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#E53935] shadow-[0_0_18px_#E53935]" />

                {/* Secondary marker */}
                <div className="absolute bottom-[12%] right-[8%] h-1.5 w-1.5 rounded-full bg-neutral-500" />
            </motion.div>

            {/* Second orbit */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-56 w-56 rounded-full border border-neutral-800 lg:h-[300px] lg:w-[300px] 2xl:h-[370px] 2xl:w-[370px]"
            >
                <div className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#E53935] shadow-[0_0_12px_#E53935]" />
            </motion.div>

            {/* Third orbit */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-40 w-40 rounded-full border border-dashed border-neutral-800 lg:h-[220px] lg:w-[220px] 2xl:h-[280px] 2xl:w-[280px]"
            />

            {/* Horizontal axis */}
            <div className="absolute h-px w-[82%] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

            {/* Vertical axis */}
            <div className="absolute h-[82%] w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />

            {/* Horizontal red signal */}
            <motion.div
                animate={{
                    opacity: [0, 0.8, 0],
                    scaleX: [0.2, 1, 0.2],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute h-px w-[55%] origin-center bg-[#E53935] shadow-[0_0_10px_#E53935]"
            />

            {/* Core */}
            <motion.div
                animate={{
                    scale: [1, 1.045, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative flex h-28 w-28 items-center justify-center rounded-full border border-neutral-600 bg-[#0b0b0b] shadow-[0_0_50px_rgba(229,57,53,0.12)] lg:h-32 lg:w-32 2xl:h-40 2xl:w-40"
            >
                {/* Inner ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute h-16 w-16 rounded-full border border-neutral-800 border-t-[#E53935] lg:h-20 lg:w-20 2xl:h-24 2xl:w-24"
                />

                {/* Inner glow */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute h-8 w-8 rounded-full bg-[#E53935]/20 blur-xl"
                />

                {/* Core point */}
                <div className="relative h-2.5 w-2.5 rounded-full bg-[#E53935] shadow-[0_0_30px_#E53935] 2xl:h-3 2xl:w-3" />
            </motion.div>

            {/* Technical labels */}

            <span className="absolute left-[8%] top-[18%] font-mono text-[11px] tracking-[0.12em] text-neutral-500">
                SYS_01
            </span>

            <span className="absolute right-[8%] top-[20%] font-mono text-[11px] tracking-[0.12em] text-[#E53935]">
                ACTIVE
            </span>

            <span className="absolute bottom-[10%] left-[8%] font-mono text-[11px] tracking-[0.12em] text-neutral-600">
                CORE // ONLINE
            </span>

            <span className="absolute bottom-2 right-2 font-mono text-[11px] tracking-[0.18em] text-neutral-500">
                INTERACTIVE_SYSTEM // 001
            </span>

        </div>
    );
}