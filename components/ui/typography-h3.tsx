import { TypographyProps } from "@/types";

export function TypographyH3({ text }: TypographyProps) {
    return (
        <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight">
            {text}
        </h3>
    );
}
