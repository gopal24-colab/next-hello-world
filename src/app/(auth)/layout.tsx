"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

const navLinks = [
  { name: "register", url: "/register" },
  { name: "login", url: "/login" },
  { name: "forgot-password", url: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      <ul className="flex justify-start gap-2">
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.url);
          return (
            <li key={link.url}>
              <Link
                href={link.url}
                className={`${
                  isActive ? "font-bold mr-4" : "text-blue-500 mr-4"
                }`}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
}
