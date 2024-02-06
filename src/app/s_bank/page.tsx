import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Screenshot {
  title: string
  image: string
}

const screenshots: Screenshot[] = [
  {
    title: "首页",
    image: "/screenshot/sbank/home.png",
  },
  {
    title: "Bank页",
    image: "/screenshot/sbank/bank.png",
  },
  {
    title: "设置页",
    image: "/screenshot/sbank/settings.png",
  },
  {
    title: "账户信息",
    image: "/screenshot/sbank/me.png",
  },
  {
    title: "1.点击+，开始转账",
    image: "/screenshot/sbank/transfer_step_1.png",
  },
  {
    title: "2.输入转账账号，或扫收据条形码",
    image: "/screenshot/sbank/transfer_step_2.png",
  },
  {
    title: "3.输入收款人姓名",
    image: "/screenshot/sbank/transfer_step_3.png",
  },
  {
    title: "4.选择付款银行账号",
    image: "/screenshot/sbank/transfer_step_4.png",
  },
  {
    title: "5.选择付款日期",
    image: "/screenshot/sbank/transfer_step_5.png",
  },
  {
    title: "转账单",
    image: "/screenshot/sbank/transfer_step_6.png",
  },
]

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="italic text-xl font-bold pt-4 pb-4 underline decoration-wavy decoration-sky-600">主要页面</h1>
      <div className="grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {screenshots.slice(0, 4).map((screenshot) => (
          <div key={screenshot.title} className="flex flex-col items-center gap-2">
            <ScrollArea className="w-[300px] h-[600px] rounded-lg border p-4">
              <Image
                src={screenshot.image}
                alt={`${screenshot.title}`}
                className="aspect-auto"
                width={300}
                height={400}
              />
            </ScrollArea>
            <p className="text-sm text-slate-500 mt-2">{screenshot.title}</p>
          </div>
        ))}
      </div>

      <h1 className="italic text-xl font-bold pt-8 pb-4 underline decoration-wavy decoration-sky-600">转账流程</h1>
      <div className="grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {screenshots.slice(4, 9).map((screenshot) => (
          <div key={screenshot.title} className="flex flex-col items-center gap-2">
            <ScrollArea className="w-[300px] h-[600px] rounded-lg border p-4">
              <Image
                src={screenshot.image}
                alt={`${screenshot.title}`}
                className="aspect-auto"
                width={300}
                height={400}
              />
            </ScrollArea>
            <p className="text-sm text-slate-500 mt-2">{screenshot.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}







