import type { Metadata } from "next";
import { Poppins, } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import { NavbarDemo } from "./components/Navbar";

const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],

  subsets: ['latin'],

});

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
      <body className={inter.className}>
        <main className="">
          <NavbarDemo />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
