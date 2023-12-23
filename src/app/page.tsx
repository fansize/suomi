import Link from "next/link";
import Image from "next/image";
import ExpandingArrow from "@/components/icons/expanding-arrow";
import { IconQuote, IconGlobe } from "@/components/icons/icons";
import { SiteProps } from "@/lib/types";

export default async function Page() {
  const json = require("@/data/website.json");
  const data = json.data;

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {data.map((website: SiteProps) => (
          <Link
            key={website.title}
            href={website.href}
            className="group rounded-lg border px-5 py-4 border-gray-900/5  dark:border-neutral-800 dark:bg-neutral-800/30 hover:shadow-lg hover:shadow-gray-300/50 hover:dark:shadow-neutral-800/50 active:shadow-sm transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 mb-3">
              {website.icon ? (
                <Image
                  alt={website.title}
                  src={website.icon}
                  className="object-contain rounded-lg"
                  width={20}
                  height={20}
                />
              ) : (
                <IconGlobe />
              )}
              <h2 className={`text-base font-semibold`}>{website.title}</h2>
              <ExpandingArrow className="ml-2" />
            </div>
            <div className="flex gap-2">
              <IconQuote className=" opacity-20" />
              <p className={`m-0 max-w-[35ch] text-[12px] opacity-60`}>
                {website.description}
              </p>
            </div>
            {/* <p className={`mt-3 max-w-[35ch] text-[12px] opacity-60`}>
              {website.tags.map((tag) => `#${tag} `)}
            </p> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
