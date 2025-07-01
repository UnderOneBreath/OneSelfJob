import Link from "next/link";

const links = [
  { href: "/policy", label: "Политика конфиденциальности" },
  { href: "/rules", label: "Пользовательское соглашение" },
  { href: "/terms", label: "Условия реализации товаров и услуг" },
];

export default function ContentsMenu() {
  return (
    <nav className="hidden md:flex w-[200px] flex-col gap-2 px-2 bg-white">
      <ul className="flex flex-col gap-1">
        {links.map(link => (
            <li key={link.href}>
            <Link
              href={link.href}
              className="block px-3 py-2 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    {/* <span className="font-semibold text-gray-700 text-lg mb-1">Содержание</span> */}
    </nav>
  );
}
