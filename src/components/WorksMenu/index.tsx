import { RouteLocale, Router, schema } from "next-roots";
import WorkItem from "./WorkItem";

export default function WorksMenu({ locale }: {locale: RouteLocale}) {
  const router = new Router(schema);

  return (
    <div className="flex min-w-minimum justify-center">
      <div className="mx-7 my-6 flex flex-col gap-6 max-md:m-5 max-md:gap-4 max-xs:m-4">
        <div className="flex gap-6 max-md:gap-4 max-xs:flex-col">
          <WorkItem
            name="Real Limpeza"
            image="https://i.imgur.com/aSNYcsN.png"
            link={router.getHref('/reallimpeza', { locale })}
          />
          <WorkItem
            name="Devine"
            image="https://i.imgur.com/UaAvztP.png"
            link={router.getHref('/devine', { locale })}
          />
        </div>
        <div className="flex gap-6 max-md:gap-4 max-xs:flex-col">
          <WorkItem
            name="Xchango"
            image="https://i.imgur.com/a3wL9Pn.png"
            link={router.getHref('/xchango', { locale })}
          />
          <WorkItem
            name="Murandido"
            image="https://i.imgur.com/KgBfrNU.png"
            link={router.getHref('/murandido', { locale })}
          />
        </div>
      </div>
    </div>
  );
}
