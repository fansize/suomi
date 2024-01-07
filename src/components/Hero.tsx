import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-start items-center">
        {/* <h1 className="text-4xl font-medium text-center max-w-[700px]">
          Use this template to create your own site
        </h1> */}

        <div className="flex w-full max-w-sm items-center space-x-2 mb-5">
          <Input type="email" placeholder="输入邮箱" />
          <Button type="submit">
            订阅
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center font-medium gap-2 text-lg opacity-80 text-center max-w-[700px]">
          <h2>及时获取博物馆免费门票信息！</h2>
        </div>
      </div>
    </>
  );
}
