import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Logo({ className, imageClassName }: { className?: string; imageClassName?: string }) {
  return (
    <div className={cn("w-16 h-16 overflow-hidden pt-2", className)}>
      <Image
        src={"/logo.svg"}
        alt="lakvee softwares"
        width={100}
        height={100}
        className={cn("w-16 h-16 scale-125", imageClassName)}
      />
    </div>
  );
}
