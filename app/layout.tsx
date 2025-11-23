import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "900"],
  variable: "--font-serif"
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Florence Tan | UI/UX Designer",
  description: "Portfolio of Florence Tan - Designer, Listener, Dreamer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${dmSans.variable} bg-[#FDF5E0] text-[#4A2C18] antialiased`}>
        {children}
      </body>
    </html>
  );
}