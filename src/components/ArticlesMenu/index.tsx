import ArticlesLink from "./ArticlesLink";

export default function ArticlesMenu({ translation }: { translation: any }) {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-22 mb-24 mt-6 flex flex-wrap items-center justify-center gap-6 max-xl:mb-12 max-xs:mx-8 max-xs:mb-8 max-xs:mt-3">
        <ArticlesLink
          message={translation.subtext}
          link="/"
          image="https://i.imgur.com/pgTetmA.png"
        />
        <ArticlesLink
          message={translation.subtext}
          link="/"
          image="https://i.imgur.com/pgTetmA.png"
        />
        <ArticlesLink
          message={translation.subtext}
          link="/"
          image="https://i.imgur.com/pgTetmA.png"
        />
      </div>
    </div>
  );
}
