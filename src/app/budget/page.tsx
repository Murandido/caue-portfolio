import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget - Studio cauehenrique",
};

export default function Budget() {
  return (
    <main>
      <section className="mt-32 flex min-w-[338.55px] flex-wrap-reverse justify-center gap-40 max-sm:mt-14">
        <div className="h-[70rem] w-[46rem] max-md:w-[40rem] max-sm:h-[80rem] max-xs:h-[85rem]">
          <iframe
            className="h-full w-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfb1USB9bZwWLdquPi1_Hm4zi507Q8bLY00WNd-rxjxDiL6tg/viewform?embedded=true"
          >
            Loading…
          </iframe>
        </div>
        <div className="mx-10 flex w-[40rem] flex-col gap-14 max-sm:gap-6 max-xs:mx-5">
          <h1 className="text-6xl max-sm:text-3xl">Budget!</h1>
          <div className="flex flex-col gap-12 font-robotoSlab text-2xl max-sm:gap-4 max-sm:text-sm">
            <p>Are you in need of a comprehensive visual identity quote?</p>
            <p>
              Look no further! Simply fill out our user-friendly form, providing
              us with the necessary details, and get ready to receive a
              personalized email that not only includes all the information you
              need but also extends a warm invitation for a video call.
            </p>
            <p>
              We believe that a video call will allow us to delve into your
              vision, understand your specific needs, and collaborate more
              effectively to create a visual identity that truly represents your
              brand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
