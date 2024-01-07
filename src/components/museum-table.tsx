import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowUpRight, MapPin, BadgeAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Museum } from "@/lib/types";

export default function MuseumTable({ museums }: { museums: Museum[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>馆名</TableHead>
          <TableHead className="pr-20">城市</TableHead>
          <TableHead className="pr-10">闭馆</TableHead>
          <TableHead>常规票</TableHead>
          <TableHead>
            <div className="flex items-center">
              折扣票
              <Popover>
                <PopoverTrigger>
                  <BadgeAlert className="ml-1 h-3.5 w-3.5" />
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-xs text-start tracking-wider">
                    通常学生、失业者、老年人可以享受折扣票,每个博物馆的政策不同,请查看博物馆官网.
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          </TableHead>
          <TableHead>免票</TableHead>
          <TableHead>
            <div className="flex items-center">
              博物馆卡
              <Link
                href="https://museot.fi/en.php"
                target="_blank"
                className="float-right ml-1"
              >
                <Image
                  src="/logos/logo-museot-fi.svg"
                  alt="Museum Card"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {museums.map((museum) => (
          <TableRow key={museum.id}>
            <TableCell>
              <Link href={museum.website} target="_blank">
                <div className="flex items-center">
                  {museum.name}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </TableCell>
            <TableCell>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  museum.name
                )}`}
                target="_blank"
              >
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  {museum.city}
                </div>
              </Link>
            </TableCell>
            <TableCell>{museum.closed}</TableCell>
            <TableCell>{`€ ${museum.regular_ticket}`}</TableCell>
            <TableCell>{`€ ${museum.discounted_ticket}`}</TableCell>
            <TableCell>{museum.free_entry}</TableCell>
            <TableCell>{museum.museum_card ? "可用" : "不可用"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
