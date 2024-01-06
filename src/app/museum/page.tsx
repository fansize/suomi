import MuseumTable from "@/components/museum-table";
import { museumsData_cn } from "@/data/museumData";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="">
        <MuseumTable museums={museumsData_cn} />
      </div>
    </div>
  );
}
