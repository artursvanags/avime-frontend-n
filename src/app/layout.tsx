import "./styles/global.css";
import Providers from "@/components/providers";
import { ThemeProvider } from "@/lib/theme-provider";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/lib/tailwind-indicator";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.developer,
      url: "https://github.com/artursvanags",
    },
  ],
  creator: siteConfig.developer,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <main className="relative">{children}</main>
            <TailwindIndicator />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
