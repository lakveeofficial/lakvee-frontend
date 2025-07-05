import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function BtnComponent({
  type = "button",
  isDisabled = false,
  value,
  onClick,
  variant = "outlined",
  className = "",
  iconSrc,
  iconClassName = "",
  loading = false,
}: {
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  variant?: "outlined" | "filled";
  className?: string;
  iconClassName?: string;
  iconSrc?: string;
  loading?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        "px-8 py-2 text-sm rounded-md border font-medium hover:shadow-sm hover:transition-all hover:delay-200 hover:ease-in-out hover:shadow-gray-800",
        variant === "outlined" &&
          "border-primary text-primary",
        variant === "filled" &&
          "bg-primary border-primary text-primary",
        isDisabled && "opacity-50 hover:shadow-none",
        iconSrc && "flex items-center px-5 py-[10px] gap-2",
        loading && "animate-bounce",
        className,
      )}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          className={cn(iconClassName, "")}
          alt="trials"
          width={8}
          height={8}
        />
      )}
      {value}
    </button>
  );
}
