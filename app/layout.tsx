import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavbarDemo } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panaverse | Artifical Intelligence",
  description: "Panaverse Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`}>
        <main>
          <NavbarDemo />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
