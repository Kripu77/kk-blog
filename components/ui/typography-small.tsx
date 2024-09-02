import { TypographyProps } from "@/types";

export function TypographySmall({ text }: TypographyProps) {
    return (
      <small className="text-sm font-medium leading-none">{text}</small>
    )
  }