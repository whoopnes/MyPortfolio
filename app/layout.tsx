import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Plasma from "./components/plasma";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agnes Julia's Portfolio",
  description: "Strong interest in technology, exploration, and continuous learning. Showcasing my projects in web development, machine learning, and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased relative min-h-screen`}
      >
        {/* Plasma background fixed and behind all content */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Plasma color="#ff00ff" />
        </div>
        {/* Main content above plasma */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
