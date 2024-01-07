import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";
import { Museum } from "@/lib/types";

export default function MuseumTable({ museums }: { museums: Museum[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>博物馆</TableHead>
          <TableHead className="pr-20">城市</TableHead>
          <TableHead className="pr-10">闭馆</TableHead>
          <TableHead className="">常规票价</TableHead>
          <TableHead className="">折扣票</TableHead>
          <TableHead className="">免票</TableHead>
          <TableHead>
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
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {museums.map((museum) => (
          <TableRow key={museum.id}>
            <TableCell>
              <Link href={museum.website}>{museum.name}</Link>
            </TableCell>
            <TableCell>{museum.city}</TableCell>
            <TableCell>{museum.closed}</TableCell>
            <TableCell>{`€${museum.regular_ticket}`}</TableCell>
            <TableCell>{`€${museum.discounted_ticket}`}</TableCell>
            <TableCell>{museum.free_entry}</TableCell>
            <TableCell>{museum.museum_card ? "可用" : "不可用"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
