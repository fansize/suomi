import { Inter, Space_Grotesk, Finlandica } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const finlandica = Finlandica({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});
