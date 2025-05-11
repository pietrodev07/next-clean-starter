import "./globals.css";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { metadatInfo } from "@/lib/metadata";
import { Providers } from "@/components/providers";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";

const bricolageFont = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = metadatInfo;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(bricolageFont.className, "antialiased")}>
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
