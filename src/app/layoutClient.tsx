"use client";

import { SessionProvider } from "next-auth/react"; //digunakan untuk mengambil data user
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const disableNavbar = [
  "/dashboard",
  "/dashboard/product-admin",
  "/dashboard/product-admin/add",
  "/dashboard/banner-admin",
];
export default function LayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <SessionProvider>
        <div className="flex flex-col">
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
          {!disableNavbar.includes(pathname) && <Footer />}
        </div>
      </SessionProvider>
    </>
  );
}
