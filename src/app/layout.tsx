import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis";
import ThemeProvider from "@/components/providers/theme";
import Header from "@/components/navbar/header";
import Footer from "@/components/footer";
import { ScrollToTop } from "@/components/home";
import Navbar from "@/components/navbar";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ashique",
  description: "Created by Asqe",
  icons: {
    icon: [
      {
        url: "/favicon/dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon/light.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none" suppressHydrationWarning>
      <body className={`${poppinsSans.variable}`}>
        <LenisProvider />
        <ScrollToTop />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main> {children}</main>
          <Footer />
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
