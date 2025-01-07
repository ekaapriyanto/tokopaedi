"use client";
import { SessionProvider } from "next-auth/react"; //digunakan untuk mengambil data user
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function LayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SessionProvider>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </>
  );
}
