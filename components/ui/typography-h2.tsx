import { TypographyProps } from "@/types";

export function TypographyH2({ text }: TypographyProps) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {text}
        </h2>
    );
}
