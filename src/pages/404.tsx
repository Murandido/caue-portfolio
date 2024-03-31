import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import SVG404pageHeroImage from "../assets/images/404pageHeroImage.svg";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Error 404 | Cauê Henrique studio</title>
        <meta
          name="description"
          content="The page you are looking for may have been moved, deleted, or possibly never existed."
        />
      </Head>
      <main className="flex h-screen min-w-minimum">
        <div className="m-auto">
          <div className="m-[4.5rem] flex max-w-[49.5rem] flex-col items-center justify-center gap-[4.5rem] max-xs:m-6">
            <div>
              <h1 className="text-center text-6xl font-bold uppercase max-xs:text-3xl">
                Error 404
              </h1>
            </div>
            <div>
              <Image src={SVG404pageHeroImage} alt="hero image" />
            </div>
            <div>
              <p className="text-center font-gelica text-2xl max-xs:text-xs">
                The page you are looking for may have been moved, deleted, or
                possibly never existed.{" "}
                <Link className="underline hover:text-primary-400" href="/">
                  Back home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
