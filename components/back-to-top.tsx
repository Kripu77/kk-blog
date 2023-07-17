"use client";

import React, { useState, useEffect } from "react";
import { Icons } from "./icons";

const BackToTop = () => {
    const [currentHeight, setCurrentHeight] = useState<number>(0);
    const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const handleScroll = () => {
        const height = window.scrollY;
        setCurrentHeight(height);

        if (currentHeight > 200) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        () => window.removeEventListener("scroll", handleScroll);
    }, [currentHeight]);

    return (
        <div>
            {showScrollButton ? (
                <p onClick={scrollToTop}>
                    {" "}
                    <Icons.moveUp />{" "}
                </p>
            ) : (
                ""
            )}
        </div>
    );
};

export default BackToTop;
