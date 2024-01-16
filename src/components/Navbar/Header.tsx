"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";
import NavbarLinks from "@/components/Navbar/NavbarLinks";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-2 hidden sm:flex">
              <Image
                src="/moomin.svg"
                alt="Moomin logo"
                width={80}
                height={80}
                priority
              />
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <h3 className="text-2xl font-bold">Finland Web Directory</h3>
              <p className="font-medium tracking-wide">芬兰生活指南101</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-4 justify-end">
        <NavbarLinks />

        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 bg-background p-1 shadow-sm hidden lg:flex md:flex"
        >
          <ThemeSwitch />
        </Button>
      </div>
    </header>
  );
}
