import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/** ADWA mark from /public/adwasvg.svg */
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/adwasvg.svg"
      alt="ADWA"
      width={528}
      height={470}
      priority={priority}
      unoptimized
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
