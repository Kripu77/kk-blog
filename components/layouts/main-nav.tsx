"use client";

import * as React from "react";
import Link from "next/link";
import { MainNavItem } from "@/types";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";

interface MainNavProps {
    items: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
    return (
        <NavigationMenu className="space-x-6 list-none hidden lg:flex ">
            {items.map((item) => (
                <Link
                    href={item.href}
                    key={item.label}
                    legacyBehavior
                >
                    <NavigationMenuItem
                        className={cn(
                            "text-sm font-medium",
                            "hover:underline",
                            "dark:hover:text-gray-300"
                        )}
                    >
                        {item.label}
                    </NavigationMenuItem>
                </Link>
            ))}
        </NavigationMenu>
    );
}
