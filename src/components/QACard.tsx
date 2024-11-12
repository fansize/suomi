import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function QACard() {
  return (
    <div className="flex flex-col justify-start items-center">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>博物馆卡值得买吗?</AccordionTrigger>
          <AccordionContent>
            对于常居在芬兰的人来说值得，几乎涵盖了所有博物馆及一些其他场馆(例如岩石教堂)；
          </AccordionContent>
          <AccordionContent>
            对于游客来说就没必要了，最热门的几个博物馆门票加起来也不超过€50。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            是所有的博物馆都有免费参观时段吗？
          </AccordionTrigger>
          <AccordionContent>
            不是的。少部分博物馆每周或每月有固定日期免票，还有一些是针对特定节日或者庆祝日免票。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>折扣票针对那些人？</AccordionTrigger>
          <AccordionContent>
            主要针对学生、退休者、失业者、军人等，每个馆的规定会有细微差别，已官方为准。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
