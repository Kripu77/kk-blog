import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layouts/site-header";
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.title,
    description:
        siteConfig.description
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={inter.className}
        >
            <head />
            <body >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <SiteHeader siteConfig={siteConfig} />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
