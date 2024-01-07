import MuseumTable from "@/components/museum-table";
import { museumsData_cn } from "@/data/museumData";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <div className="mx-auto max-w-full px-8">
      {/* <Hero /> */}
      <div className="mt-12">
        <MuseumTable museums={museumsData_cn} />
      </div>
    </div>
  );
}
