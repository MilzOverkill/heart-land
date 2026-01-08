import type { Metadata } from "next";
import { Open_Sans, David_Libre, Nunito, Inter } from "next/font/google";
import "./globals.css";
import FadeTransition from "../components/FadeTransition";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import { NavigationProvider } from "@/contexts/NavigationContext";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-openSans",
});

const davidLibre = David_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-davidLibre",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Heart Land",
  description: "Discover authentic Sri Lankan goods in the UAE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${davidLibre.variable} ${nunito.variable} ${inter.variable}`}>
      <body>
        <NavigationProvider>
          <Navbar />
          <FadeTransition>
            {children}
          </FadeTransition>
          <Footer/>
        </NavigationProvider>
      </body>
    </html>
  );
}
