"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export const ScrollProgressBar = () => {
    const [scrolledHeight, setScrolledHeight] = useState<number>(0);

    const calclulateScrolledHeight = () => {
        const totalScrolled = document.documentElement.scrollTop;
        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolledPercentage = (totalScrolled / totalHeight) * 100;
        setScrolledHeight(scrolledPercentage);
    };

    useEffect(() => {
        window.addEventListener("scroll", calclulateScrolledHeight);
        return () => {
            window.removeEventListener("scroll", calclulateScrolledHeight);
        };
    });

    return <Progress value={scrolledHeight} />;
};
