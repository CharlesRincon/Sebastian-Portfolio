export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-[#090909]">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-12 2xl:max-w-[1500px]">

                {/* Copyright */}
                <span>
                    © 2026 Sebastian Rincón
                </span>

                {/* Role */}
                <span className="font-mono text-xs tracking-[0.15em] text-neutral-500">
                    MULTIMEDIA ENGINEER / SOFTWARE DEVELOPER
                </span>

                {/* Social links */}
                <div className="flex gap-6">
                    <a
                        href="https://github.com/CharlesRincon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/juan-sebastian-rincón-claros-a30186277/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white"
                    >
                        LinkedIn
                    </a>
                </div>

            </div>
        </footer>
    );
}