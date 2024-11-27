import ArticlesLink from "./ArticlesLink";

export default function ArticlesMenu() {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-[5.5rem] mb-24 mt-6 flex flex-wrap items-center justify-center gap-6 max-xl:mb-12 max-xs:mx-8 max-xs:mb-8 max-xs:mt-3">
        <ArticlesLink
          message="Beyond the Computer: The Creative Process in Logo Design"
          link="/"
          image="https://i.imgur.com/pgTetmA.png"
        />
        <ArticlesLink
          message="Beyond the Computer: The Creative Process in Logo Design"
          link="/"
          image="https://i.imgur.com/pgTetmA.png"
        />
        <ArticlesLink
          message="Beyond the Computer: The Creative Process in Logo Design"
          link="/"
          image="https://i.imgur.com/pgTetmA.png"
        />
      </div>
    </div>
  );
}
