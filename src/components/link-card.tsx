import { SiteProps } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import ExpandingArrow from "@/components/icons/expanding-arrow";
import { IconQuote, IconGlobe } from "@/components/icons/icons";

export default function LinkCard(website: SiteProps) {
  return (
    <>
      <Link
        key={website.id}
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

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <IconQuote className=" opacity-40" />
            <p
              className={`max-w-[35ch] h-8 text-[12px] font-medium opacity-80 line-clamp-2`}
            >
              {website.description}
            </p>
          </div>
          <div className="flex gap-2">
            {website.tags.map((tag) => (
              <p key={tag} className={`max-w-[35ch] text-[12px] opacity-60`}>
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
