import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layouts/site-header";
import { siteConfig } from '@/config/site';
import SiteFooter from '../components/layouts/site-footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


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
                <SpeedInsights/>
                <Analytics/> 
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <SiteHeader siteConfig={siteConfig} />
                    {children}
             
                    <SiteFooter footerItems={siteConfig.footerItems} />
                </ThemeProvider>
            </body>
        </html>
    );
}
