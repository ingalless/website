import Link from "next/link";
import Image from "next/image";

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
            <a className="text-purple-200 font-semibold no-underline flex justify-between items-center space-x-2">
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
                className="no-underline font-semibold text-purple-200"
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
