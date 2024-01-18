"use client";
import clsx from "clsx";

interface NavbarLinkProps {
  name: string;
  href: string;
}

export default function NavbarLink({ name, href }: NavbarLinkProps) {
  const linkClasses = clsx(
    `${
      window.location.pathname === href && "underline"
    } hover:text-primary-400 hover:underline`,
  );

  return (
    <a className={linkClasses} href={href}>
      {name}
    </a>
  );
}
