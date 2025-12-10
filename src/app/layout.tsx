import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis";
import ThemeProvider from "@/components/providers/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background animate-line-move pointer-events-none fixed inset-0 -z-10 bg-[repeating-linear-gradient(315deg,hsl(var(--lines))_0,hsl(var(--lines))_1px,transparent_0,transparent_50%),repeating-linear-gradient(-315deg,hsl(var(--lines))_0,hsl(var(--lines))_1px,transparent_0,transparent_50%)] bg-size-[16px_16px] [--offset-x:16px] [--offset-y:-16px]" />
          <Header />
          <main> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
