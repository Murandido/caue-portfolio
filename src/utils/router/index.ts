import { RouteNameStatic, Router, schema } from "next-roots";

export const router = new Router(schema);

export function getPageLocale() {
  return Router.getLocale();
}
