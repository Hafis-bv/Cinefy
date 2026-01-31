import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/widgets/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cinefy",
    template: "%s | Cinefy",
  },
  description:
    "Cinefy — discover the world of cinema: movies, actors, roles, and detailed information in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-body text-white`}
      >
        <div className="flex flex-col xl:flex-row ">
          <Sidebar />
          <div className="w-full overflow-x-auto">
            <div className="sm:h-screen overflow-auto">
              <div className="w-full flex justify-center mx-auto overflow-auto md:h-[calc(100vh-30px)] overflow-y-auto relative">
                <div className="w-full md:max-w-7xl mt-10">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
