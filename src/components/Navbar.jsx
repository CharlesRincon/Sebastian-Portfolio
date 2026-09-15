import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#090909]/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12 2xl:max-w-[1500px]">

                {/* Brand */}
                <a
                    href="#home"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center"
                >
                    <span className="text-sm font-bold tracking-[0.08em] text-white">
                        SEBASTIAN RINCÓN
                    </span>

                    <span className="ml-1 text-lg font-bold text-[#E53935] transition-transform duration-300 group-hover:-translate-y-0.5">
                        .
                    </span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-10 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="group relative py-2 text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-white"
                        >
                            {link.name}

                            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#E53935] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-neutral-400 transition-colors duration-300 hover:text-[#E53935] md:hidden"
                    aria-label={isOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <X size={24} strokeWidth={1.8} />
                    ) : (
                        <Menu size={24} strokeWidth={1.8} />
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="border-t border-neutral-800 bg-[#090909] px-6 py-8 md:hidden">
                    <div className="flex flex-col gap-6">
                        {links.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center gap-4 text-lg font-medium text-neutral-300 transition-colors duration-300 hover:text-white"
                            >
                                <span className="font-mono text-xs tracking-[0.15em] text-[#E53935]">
                                    0{index + 1}
                                </span>

                                <span>
                                    {link.name}
                                </span>

                                <span className="ml-auto h-px w-0 bg-[#E53935] transition-all duration-300 group-hover:w-8" />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}