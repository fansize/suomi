"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    toast("Thank you for subscribe!", {
      description: `${email} has been added to the list.`,
    });
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-3xl font-bold text-center tracking-wide mb-6 max-w-[700px]">
          芬兰博物馆参观指南
        </h1>
        <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
          <Input
            type="email"
            placeholder="输入邮箱"
            onChange={handleEmailChange}
          />
          <Button type="submit" onClick={handleClick}>
            订阅
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center font-medium gap-2 text-base opacity-70 text-center max-w-[700px]">
          <h2>订阅获取博物馆免票信息，持续更新！</h2>
        </div>
      </div>
    </>
  );
}
