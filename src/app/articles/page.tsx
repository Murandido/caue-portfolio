import ArticlesHero from "@/components/ArticlesHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Cauê Henrique studio",
  description:
    "There is no more effective way to showcase expertise than through articles. Come and discover our visual identity studies.",
};

export default function Articles() {
  return (
    <div>
      <ArticlesHero />
    </div>
  );
}
