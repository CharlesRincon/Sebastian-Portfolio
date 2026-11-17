import { motion } from "framer-motion";

// Decorative only: the slow orbits are the hero's single ambient motion.
export default function HeroVisual() {
    return (
        <div
            aria-hidden="true"
            className="relative flex h-[420px] w-full items-center justify-center lg:h-[540px] 2xl:h-[640px]"
        >

            {/* Ambient red glow */}
            <div className="absolute h-48 w-48 rounded-full bg-[#E53935]/20 opacity-25 blur-[80px] lg:h-64 lg:w-64 2xl:h-80 2xl:w-80" />

            {/* Outer orbit */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-72 w-72 rounded-full border border-neutral-800 lg:h-[400px] lg:w-[400px] 2xl:h-[480px] 2xl:w-[480px]"
            >
                <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#E53935] shadow-[0_0_18px_#E53935]" />
            </motion.div>

            {/* Inner orbit */}
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

            {/* Axes */}
            <div className="absolute h-px w-[82%] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

            <div className="absolute h-[82%] w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />

            {/* Core */}
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-neutral-700 bg-[#0b0b0b] shadow-[0_0_50px_rgba(229,57,53,0.12)] lg:h-32 lg:w-32 2xl:h-40 2xl:w-40">
                <div className="h-2.5 w-2.5 rounded-full bg-[#E53935] shadow-[0_0_30px_#E53935] 2xl:h-3 2xl:w-3" />
            </div>

        </div>
    );
}
