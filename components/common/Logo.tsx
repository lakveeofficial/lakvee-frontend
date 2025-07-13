"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Logo({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className={cn(
        "flex items-center gap-2 w-auto h-16 overflow-hidden pt-2",
        className
      )}
    >
      <Image
        src={"/logo.svg"}
        alt="lakvee softwares"
        width={48}
        height={48}
        className={cn("w-12 h-12 scale-125", imageClassName)}
      />
      <span className="text-2xl font-extrabold text-[#003366] tracking-tight select-none">
        LakVee
      </span>
    </div>
  );
}
