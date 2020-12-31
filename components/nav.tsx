import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const links = [
  { href: "https://github.com/ingalless", label: "GitHub" },
  { href: "https://twitter.com/ingalless1", label: "Twitter" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleTheme = () => {
    if (!mounted) {
      return;
    }
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-purple-700 dark:text-purple-200 font-semibold no-underline flex justify-between items-center space-x-2">
              <Image
                className="rounded-full"
                src="/me.jpg"
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <span>Foveal Development</span>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="no-underline font-semibold text-purple-700 dark:text-purple-200"
              >
                {label}
              </a>
            </li>
          ))}
          <li key="toggle" className="flex justify-center">
            <DarkModeToggle
              size="50px"
              checked={theme === "dark"}
              onChange={toggleTheme}
              speed={2}
            />
          </li>
        </ul>
      </ul>
    </nav>
  );
}
