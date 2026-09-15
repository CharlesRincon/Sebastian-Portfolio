export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-[#090909]">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 2xl:max-w-[1500px]">

                <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

                    {/* Identity */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center border border-neutral-800 font-mono text-[10px] tracking-[0.1em] text-neutral-300 transition-colors duration-300 hover:border-[#E53935] hover:text-[#E53935]">
                                SR
                            </span>

                            <span className="font-medium text-neutral-300">
                                Sebastian Rincón
                            </span>
                        </div>

                        <p className="mt-3 font-mono text-[10px] tracking-[0.15em] text-neutral-600">
                            © 2026 / ALL RIGHTS RESERVED
                        </p>
                    </div>

                    {/* Role */}
                    <div className="lg:text-center">
                        <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-600">
                            MULTIMEDIA ENGINEER
                        </p>

                        <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-neutral-600">
                            / SOFTWARE DEVELOPER
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-6">

                        <a
                            href="https://github.com/CharlesRincon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-800 transition-colors duration-300 group-hover:bg-[#E53935]" />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/juan-sebastian-rincón-claros-a30186277/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-800 transition-colors duration-300 group-hover:bg-[#E53935]" />
                            LinkedIn
                        </a>

                    </div>

                </div>

                {/* Bottom line */}
                <div className="mt-10 flex items-center justify-between border-t border-neutral-800 pt-5">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
                        DIGITAL EXPERIENCES / 001
                    </span>

                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#E53935]">
                        END
                    </span>
                </div>

            </div>
        </footer>
    );
}