import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/global/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "XyNexa",
  description: "Generated by Debug Titans Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
             <Navbar></Navbar>
             <main className="min-h-screen">
                    {children}
             </main>
             <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
