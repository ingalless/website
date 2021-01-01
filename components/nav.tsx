import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "https://github.com/ingalless", label: "GitHub" },
  { href: "https://twitter.com/ingalless1", label: "Twitter" },
];

export default function Nav() {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-700 text-lg font-bold no-underline flex justify-between items-center space-x-2">
              <h1>Foveal Development</h1>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="no-underline font-semibold text-gray-700"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
