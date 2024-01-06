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
import { Museum } from "@/lib/types";

export default function MuseumTable({ museums }: { museums: Museum[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>博物馆</TableHead>
          <TableHead className="">地址</TableHead>
          <TableHead>闭馆</TableHead>
          <TableHead>常规票价</TableHead>
          <TableHead>折扣票</TableHead>
          <TableHead>免票</TableHead>
          <TableHead>博物馆卡</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {museums.map((museum) => (
          <TableRow key={museum.id}>
            <TableCell>
              <Link href={museum.website}>{museum.name}</Link>
            </TableCell>
            <TableCell className="">{museum.address}</TableCell>
            <TableCell>{museum.closed}</TableCell>
            <TableCell>{`€${museum.regular_ticket}`}</TableCell>
            <TableCell>{`€${museum.discounted_ticket}`}</TableCell>
            <TableCell>{museum.free_entry}</TableCell>
            <TableCell>{museum.museum_card ? "Yes" : "No"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
