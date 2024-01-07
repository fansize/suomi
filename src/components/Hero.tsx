"use client";
import { useState } from "react";
import { ArrowRight, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleClick = async () => {
    // 检查邮箱格式
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast("邮箱格式错误!", {
        description: "请输入一个正确的邮箱.",
      });
      return;
    }

    // 创建 URLSearchParams 对象
    const params = new URLSearchParams({ email: email });

    // 发送 GET 请求
    const response = await fetch(`/api/add-email?${params.toString()}`);

    // 检查响应状态
    if (response.ok) {
      toast("Thank you for subscribe!", {
        description: `${email} has been added.`,
      });
      setButtonDisabled(true); // 禁用按钮
    } else {
      toast("Something went wrong!", {
        description: `Could not subscribe ${email}. Please try again.`,
      });
    }
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
          <Button
            type="submit"
            onClick={handleClick}
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "已订阅" : "订阅"}
            {isButtonDisabled ? (
              <MailCheck className="ml-2 h-4 w-4" />
            ) : (
              <ArrowRight className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center font-medium gap-2 text-base opacity-70 text-center max-w-[700px]">
          <h2>订阅获取博物馆免票信息，持续更新！</h2>
        </div>
      </div>
    </>
  );
}
