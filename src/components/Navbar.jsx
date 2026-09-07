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
        <header className="fixed left-0 right-0 top-0 z-50 bg-[#080808]/70 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">
                <a href="#home" className="text-xl font-bold tracking-tight">
                    SR<span className="text-[#7CFF6B]">.</span>
                </a>

                <div className="hidden items-center gap-10 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-neutral-500 transition-colors hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-neutral-400 md:hidden"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-neutral-900 bg-[#080808] px-6 py-8 md:hidden">
                    <div className="flex flex-col gap-6">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg text-neutral-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
