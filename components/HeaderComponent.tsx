import Image from "next/image";
import React from "react";
import Logo from "./common/Logo";
import BtnComponent from "./common/BtnComponent";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <div className="px-20 w-full flex items-center justify-between absolute top-0 text-white ">
      <Logo />
      <div className="flex  items-center gap-10 text-primary font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Services</Link>
        <Link href={""}>Courses</Link>
        <Link href={""}>Contact</Link>
      </div>
      <BtnComponent value="Book Demo" />
    </div>
  );
}
