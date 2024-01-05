import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
 import { Museum } from "@/lib/types";

  export default function MuseumTable({ museums }: { museums: Museum[] }) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Closed</TableHead>
            <TableHead>Regular Ticket</TableHead>
            <TableHead>Discounted Ticket</TableHead>
            <TableHead>Free Entry</TableHead>
            <TableHead>Museum Card</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {museums.map((museum) => (
            <TableRow key={museum.id}>
              <TableCell>{museum.name}</TableCell>
              <TableCell>{museum.address}</TableCell>
              <TableCell>{museum.website}</TableCell>
              <TableCell>{museum.closed}</TableCell>
              <TableCell>{`€${museum.regular_ticket}`}</TableCell>
              <TableCell>{`€${museum.discounted_ticket}`}</TableCell>
              <TableCell>{museum.free_entry}</TableCell>
              <TableCell>{museum.museum_card ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }