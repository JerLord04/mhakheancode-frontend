import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Krub } from "next/font/google";
// import "./globals.css";

const krub = Krub({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "mhakheancode posts",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${krub.className}  antialiased`}>
        <nav className="sticky top-0 left-0 w-full z-50 text-white bg-blue-900 shadow-md">
          <Navbar />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
