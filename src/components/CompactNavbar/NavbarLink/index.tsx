"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
  name: string;
  href: string;
}

export default function NavbarLink({ name, href }: NavbarLinkProps) {
  const linkClasses = clsx(
    `${
      usePathname() === href && "underline"
    } hover:text-primary-400 hover:underline`,
  );

  return (
    <Link className={linkClasses} href={href}>
      {name}
    </Link>
  );
}
