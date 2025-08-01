import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professor Enoidem Usoro",
  description: "The official website of Professor Enoidem Usoro, a professor in the field of Business Education.",
};

interface LayoutProps {
  children: ReactNode;
}

export default function ArchiveLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <main>
          <section className="bg-white">
            <Toaster 
              richColors position="top-right" 
            />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}