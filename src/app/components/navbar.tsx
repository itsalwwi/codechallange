"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface INav {
  href: string;
  label: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems: INav[] = [
    { href: "/", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#service", label: "SERVICE" },
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#resume", label: "RESUME" },
    { href: "#blog", label: "BLOG" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A0A0A] text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-16 h-[62px]">
        {/* logo */}
        <Link href="/" className="text-xl font-bold">
          <span>About</span>
          <span className="text-[#FACC15]">Me.</span>
        </Link>

        {/* mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* navbar links */}
        <ul
          className="hidden lg:flex text-white gap-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          {navItems.map((item, index) => (
            <li key={`${item.href}-${index}`}>
              <Link href={item.href} className="hover:text-[#EAB308]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[62px] left-0 w-full bg-[#0A0A0A] shadow-md py-4">
          <ul className="flex flex-col items-center gap-4 text-sm">
            {navItems.map((item, index) => (
              <li key={`${item.href}-${index}`}>
                <Link
                  href={item.href}
                  className="hover:text-[#EAB308]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
