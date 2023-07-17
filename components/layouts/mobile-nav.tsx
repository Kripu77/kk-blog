"use client";

import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { MainNavItem } from "@/types";
import Link from "next/link";

interface MobileNavProps {
    items: MainNavItem[];
}
export function MobileNav({ items }: MobileNavProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <section className="lg:hidden">
            <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <SheetTrigger asChild>
                    <button className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0  ">
                        <svg
                            className="h-6 w-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                            />
                        </svg>
                    </button>
                </SheetTrigger>

                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>{siteConfig.title}</SheetTitle>
                        <SheetDescription>
                            {siteConfig.description}
                        </SheetDescription>
                    </SheetHeader>
                    <nav className="mt-6">
                        <ul className="space-y-4 flex flex-col">
                            {items.map((subItem) => {
                                return (
                                    <li
                                        className="hover:shadow-lg border-b-2 pb-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {" "}
                                        <Link
                                            href={subItem.href}
                                            key={subItem.label}
                                            legacyBehavior
                                        >
                                            {subItem.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </section>
    );
}
