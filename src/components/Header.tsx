"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <ThemeSwitch />
      </div>
    </header>
  );
}
