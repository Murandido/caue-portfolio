import Layout from "@/components/Layout";
import WorkHero from "@/components/WorkHero";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";

export default function Murandido() {
  return (
    <>
      <Head>
        <title>Murandido | Cauê Henrique brand design studio</title>
        <meta
          name="description"
          content="Visual identity developed for Murandido, fullstack development"
        />
      </Head>
      <div className="min-w-minimum">
        <div className="mx-[11.25rem] flex flex-col gap-24 max-xl:mx-[5.5rem] max-xs:mx-8 max-xs:gap-12">
          <WorkHero
            capeLink="https://i.imgur.com/MBuX06s.png"
            alt="Murandido Cape"
            width={1560}
            height={880}
            title="Murandido"
            span="Turning ideas into next-gen realities"
            description="Murandido is a Full-Stack programmer, which means he works on all aspects of website and application development. He can handle everything from the appearance of the site to what happens behind the scenes. With experience in web development since 2020, he began his journey with HTML and CSS, quickly progressing to PHP, JavaScript, and specializing in React, NextJS, NodeJS, and PHP. He also has knowledge in C#, Java, C++, Rust, React Native, and Expo for mobile development."
          />
          <div className="flex flex-col gap-6 font-gelica text-xl leading-[150%] max-xs:gap-3 max-xs:text-xs">
            <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
              <div className="w-full">
                <Image
                  className="w-full rounded-lg"
                  src="https://i.imgur.com/8JMuApW.png"
                  alt="Murandido Image 1"
                  width={768}
                  height={432}
                />
              </div>
              <div className="w-full">
                <Image
                  className="w-full rounded-lg"
                  src="https://i.imgur.com/DEoG5D4.png"
                  alt="Murandido Image 2"
                  width={768}
                  height={432}
                />
              </div>
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/zBQF4Br.png"
                alt="Murandido Image 3"
                width={1560}
                height={880}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/w2EtXT2.png"
                alt="Murandido Image 4"
                width={1560}
                height={880}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/F8El4b7.png"
                alt="Murandido Image 5"
                width={1560}
                height={880}
              />
            </div>
            <div className="flex justify-center">
              <p className="mx-8 my-[4.5rem] max-w-[48.75rem] text-center max-xs:my-5">
                Considering the brand&apos;s presence on the website, it was
                necessary to create a complementary solution for the brand
                designs. To meet this demand, a pattern of easily reproducible
                stickers was developed. These stickers allow for the practical
                and efficient complementation of various designs and other
                applications.
              </p>
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/ghN6sDL.png"
                alt="Murandido Image 6"
                width={1560}
                height={880}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/3IjuNMH.png"
                alt="Murandido Image 7"
                width={1560}
                height={880}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/pe3Uyeh.png"
                alt="Murandido Image 8"
                width={1560}
                height={880}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/o6wkOhf.png"
                alt="Murandido Image 9"
                width={1560}
                height={880}
              />
            </div>
            <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
              <div className="w-full">
                <Image
                  className="w-full rounded-lg"
                  src="https://i.imgur.com/9TYjBY1.png"
                  alt="Murandido Image 10"
                  width={768}
                  height={432}
                />
              </div>
              <div className="w-full">
                <Image
                  className="w-full rounded-lg"
                  src="https://i.imgur.com/S1Mzzyu.png"
                  alt="Murandido Image 11"
                  width={768}
                  height={432}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="my-[4.5rem] flex flex-col gap-6 max-xs:my-5">
                <p className="mx-8 max-w-[48.75rem] text-center">
                  The Murandido&apos;s identity was centered around the website,
                  with applications designed specifically for this purpose and
                  created through the Figma website design platform. With this
                  idea in mind, a combination of elements was developed,
                  including gradient and glass-effect.
                </p>
                <p className="mx-8 max-w-[48.75rem] text-center">
                  The concept of this pattern is to allow dynamic movements
                  within the website, highlighting and valuing not only the
                  Murandido platform but also its ability to create websites
                  that harmonize functionality and aesthetics in a distinctive
                  way.
                </p>
              </div>
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/VXsA9UW.png"
                alt="Murandido Image 12"
                width={1560}
                height={880}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/fDFTXvN.png"
                alt="Murandido Image 13"
                width={1560}
                height={880}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/Ei3SoPa.png"
                alt="Murandido Image 14"
                width={1560}
                height={880}
              />
            </div>
            <div className="mb-24 max-xl:mb-[5.5rem] max-xs:mb-8">
              <Image
                className="rounded-lg"
                src="https://i.imgur.com/y5DssJF.gif"
                alt="Murandido Gif 15"
                width={1560}
                height={880}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Murandido.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
