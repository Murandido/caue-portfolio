import WorkItem from "./WorkItem";

export default function WorksMenu() {
  return (
    <div className="flex min-w-minimum justify-center">
      <div className="mx-7 my-6 flex flex-col gap-6 max-md:m-5 max-md:gap-4 max-xs:m-4">
        <div className="flex gap-6 max-md:gap-4 max-xs:flex-col">
          <WorkItem
            name="Real Limpeza"
            image="https://i.imgur.com/aSNYcsN.png"
            link="/reallimpeza"
          />
          <WorkItem
            name="Devine"
            image="https://i.imgur.com/BOzzkhz.png"
            link="/"
          />
        </div>
        <div className="flex gap-6 max-md:gap-4 max-xs:flex-col">
          <WorkItem
            name="Xchango"
            image="https://i.imgur.com/bXa0i0m.png"
            link="/"
          />
          <WorkItem
            name="Murandido"
            image="https://i.imgur.com/KgBfrNU.png"
            link="/"
          />
        </div>
      </div>
    </div>
  );
}
