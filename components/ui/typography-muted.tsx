import { TypographyProps } from "@/types";


export function TypographyMuted({text}: TypographyProps) {
    return (
      <p className="text-sm text-muted-foreground">{text}</p>
    )
  }