import ArticlesLink from "./ArticlesLink";

export default function ArticlesMenu() {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-[5.5rem] my-6 flex flex-wrap items-center justify-center gap-6 max-xs:mx-8">
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
