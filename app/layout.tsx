import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ziyadatul Khair",
  description: "Fullstack developer, passionate in frontend development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-4 mt-8 flex max-w-2xl flex-col md:mt-20 lg:mx-auto lg:mt-32`}
      >
        <Header />
        <main className="mt-6 pl-2.5">{children}</main>
      </body>
    </html>
  );
}
