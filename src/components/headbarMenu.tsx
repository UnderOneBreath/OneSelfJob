import React from "react";
import Link from "next/link";
import Image from "next/image";

const menuLinks = [
    { href: "/about/", label: "О нас" },
    { href: "/contact/", label: "Контакты" },
    { href: "/invest/", label: "Инвестирвать" },
    { href: "/help/", label: "Помощь" },
];

const HeadbarMenu = () => (
    <header className="w-full h-14 flex items-center">
        <div className="flex items-center justify-between w-full px-2 md:px-0">
            <div className="flex-1 min-w-0">
                <Link href="/">
                    <Image
                        src="/Logo_icon_(illustration)_(32x32).svg"
                        alt="OneSelfJob Logo"
                        width={32}
                        height={32}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
            <nav className="flex-1 flex gap-4 md:gap-6 justify-center">
                {menuLinks.map(link => (
                    <Link href={link.href}>
                        <span className="menu-link">{link.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="flex-1"></div>
        </div>
    </header>
);

export default HeadbarMenu;