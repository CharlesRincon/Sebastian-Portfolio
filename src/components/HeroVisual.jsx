import { motion } from "framer-motion";

export default function HeroVisual() {
    return (
        <div className="relative flex h-[420px] w-full items-center justify-center lg:h-[540px] 2xl:h-[640px]">

            {/* Ambient glow */}
            <div className="absolute h-40 w-40 rounded-full bg-[#7CFF6B]/5 blur-3xl lg:h-52 lg:w-52 2xl:h-64 2xl:w-64" />

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
                {/* Orbit marker */}
                <div className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#7CFF6B] shadow-[0_0_10px_#7CFF6B]" />
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
                <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-neutral-400" />
            </motion.div>

            {/* Horizontal axis */}
            <div className="absolute h-px w-[80%] bg-neutral-800" />

            {/* Vertical axis */}
            <div className="absolute h-[80%] w-px bg-neutral-800" />

            {/* Core */}
            <motion.div
                animate={{
                    scale: [1, 1.04, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative flex h-28 w-28 items-center justify-center rounded-full border border-neutral-600 bg-[#0d0d0d] lg:h-32 lg:w-32 2xl:h-40 2xl:w-40"
            >
                <div className="absolute h-16 w-16 rounded-full border border-neutral-800 lg:h-20 lg:w-20 2xl:h-24 2xl:w-24" />

                <div className="h-2 w-2 rounded-full bg-[#7CFF6B] shadow-[0_0_25px_#7CFF6B] 2xl:h-2.5 2xl:w-2.5" />
            </motion.div>

            {/* Technical labels */}

            <span className="absolute left-[8%] top-[18%] font-mono text-[11px] tracking-[0.12em] text-neutral-500">
                SYS_01
            </span>

            <span className="absolute bottom-[18%] right-[8%] font-mono text-[11px] tracking-[0.12em] text-neutral-500">
                ACTIVE
            </span>

            <span className="absolute bottom-2 right-2 font-mono text-[11px] tracking-[0.18em] text-neutral-500">
                INTERACTIVE_SYSTEM // 001
            </span>

        </div>
    );
}