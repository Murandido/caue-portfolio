import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "pt"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const preferredLocale = getLocale(request);

  return NextResponse.redirect(new URL(`/${preferredLocale}/`, request.url));
}

export const config = {
  matcher: "/",
};
