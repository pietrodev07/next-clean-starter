import "./globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { metadatInfo } from "@/lib/metadata";
import { Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { ThemeToggle } from "@/components/theme-toggle";

const appFont = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = metadatInfo;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={appFont.className}>
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
