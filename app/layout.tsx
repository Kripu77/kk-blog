import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layouts/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kripu Khadka",
    description:
        "G'day, I am Kripu Khadka a techie who is focused on perceiving modern world through technology.",
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
        >
            <head />
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <SiteHeader />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
