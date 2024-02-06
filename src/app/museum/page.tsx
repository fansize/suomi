import MuseumTable from "@/components/museum-table";
import { museumsData_cn } from "@/data/museumData";
import Hero from "@/components/Hero";
import { QACard } from "@/components/QACard";

export default function Page() {
  return (
    <div className="mx-auto max-w-full">
      {/* <Hero /> */}
      <div className="pt-8 pb-14">
        <MuseumTable museums={museumsData_cn} />
      </div>
      
        <QACard />

    </div>
  );
}
