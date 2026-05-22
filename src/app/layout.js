import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/shared/Navbar";
import Footer from "@/Components/shared/Footer";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveFleet Car Rental Platform",
  description: "Find the perfect car for any occasion - from daily commutes to weekend getaways. Affordable rates, flexible bookings, and a wide range of vehicles just a click away. Quality cars, transparent pricing, and zero paperwork. Your next adventure starts here.",
  icons: "/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Toaster position="top-left" richColors />
        <Footer/>
        </body>
    </html>
  );
}
