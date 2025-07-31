import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professor Enoidem Usoro",
  description: "The official website of Professor Enoidem Usoro, a professor in the field of Business Education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased `}
      >
        <NavBar />
        <Toaster 
          richColors position="top-right" 
        />
        {children}
      </body>
    </html>
  );
}