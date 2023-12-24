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
            <div className="mr-2">
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
      <div className="flex items-center justify-end">
        <ThemeSwitch />
      </div>
    </header>
  );
}
