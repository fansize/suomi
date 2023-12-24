import LinkCard from "@/components/link-card";
import { SiteProps } from "@/lib/types";
import {
  officeWebsiteData,
  learningWebsiteData,
  workWebsiteData,
  eventWebsiteData,
} from "@/data/websiteData";

export default async function Page() {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-bold">政务网站</h3>
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {officeWebsiteData.map((website: SiteProps) => (
          <LinkCard key={website.id} {...website} />
        ))}
      </div>

      <h3 className="text-lg font-bold">学习 / 语言</h3>
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {learningWebsiteData.map((website: SiteProps) => (
          <LinkCard key={website.id} {...website} />
        ))}
      </div>

      <h3 className="text-lg font-bold">找工作</h3>
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {workWebsiteData.map((website: SiteProps) => (
          <LinkCard key={website.id} {...website} />
        ))}
      </div>

      <h3 className="text-lg font-bold">娱乐活动</h3>
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {eventWebsiteData.map((website: SiteProps) => (
          <LinkCard key={website.id} {...website} />
        ))}
      </div>
    </div>
  );
}
