import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth | My Mind",
  description: "My Mind application for personal knowledge management",
};

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return <main>{children}</main>;
}