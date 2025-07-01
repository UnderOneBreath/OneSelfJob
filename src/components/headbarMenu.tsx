import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuLinks = [
    { href: "/about/", label: "О нас" },
    { href: "/contact/", label: "Контакты" },
    { href: "/invest/", label: "Инвестирвать" },
    { href: "/help/", label: "Помощь" },
];


const HeadbarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full h-14 flex items-center px-4">
            <div className="flex items-center justify-between w-full">
                <div className="flex-1 min-w-0">
                    <Link href="/" className="flex w-[32px]">
                        <Image
                            src="/Logo_icon_(illustration)_(32x32).svg"
                            alt="OneSelfJob Logo"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Descktop menu */}
                <nav className="hidden flex-1 md:flex gap-4 md:gap-6 justify-center">
                    {menuLinks.map(link => (
                        <Link key={link.href} href={link.href}>
                            <span className="menu-link">{link.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile menu */}
                <div className="flex-1 flex items-center justify-end">
                    <button
                        className="md:hidden w-8 h-8 justify-center"
                        onClick={() => { setIsOpen(true) }}
                        aria-label="Open menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 right-0 h-full min-w-[300px] bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}
            >
                <div className="flex justify-between items-center p-4">
                    <span className="text-lg font-semibold">OneSelfJob</span>
                    <button
                        className="text-xl px-4"
                        onClick={() => setIsOpen(false)}
                        aria-label="Закрыть меню"
                    >
                        ✕
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    {menuLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                            <span className="text-gray-800 hover:text-blue-600">{link.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-20"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
};
export default HeadbarMenu;