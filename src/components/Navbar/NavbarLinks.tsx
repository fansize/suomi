import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/Navbar/menubar";
import Link from "next/link";

export default function NavbarLinks() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/">网站导航</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/museum">博物馆</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/s_bank">SBank翻译</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/q&a">常见问题</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
