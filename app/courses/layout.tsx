import SideBar from "../components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      <main>{children}</main>
    </>
  );
}
