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
          <Link href="/">Directory</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/museum">Museums</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
