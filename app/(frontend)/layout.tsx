import type { Metadata } from "next";
import Navbar from "@/app/components/ui/navbar/navbar";
import Footer from "@/app/components/ui/footer/footer";

export const metadata: Metadata = {
  title: "Nike. Just Do It, Nike IN",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Navbar />
          {children}
        <Footer />
      </>
  );
}
