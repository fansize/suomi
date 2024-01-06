import MuseumTable from "@/components/museum-table";
import { museumsData } from "@/data/museumData";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="">
        <MuseumTable museums={museumsData} />
      </div>
    </div>
  );
}
