
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Education", href: "/Education" },
  { name: "Hobbies", href: "/Hobbies" },
  { name: "Contact", href: "/Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Code2 className="h-6 w-6 text-primary" />
          <span>DevPortfolio</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={buttonVariants({
                variant: pathname === item.href ? "default" : "ghost",
                size: "sm",
              })}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
