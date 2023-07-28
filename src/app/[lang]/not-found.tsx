// import Link from "next/link";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <title>Error 404 | Studio Cauê Henrique</title>
      <main className="flex h-full min-w-[338.55px] items-center justify-center">
        <div className="mx-5 flex flex-col items-center justify-center gap-12">
          <h1 className="text-8xl uppercase text-primary-300 max-sm:text-4xl">
            Error 404
          </h1>
          <p className="text-2xl max-sm:text-base">
            The page you are looking for may have been moved, deleted, or
            possibly never existed.{" "}
            <Link className="text-primary-300 hover:underline" href="/">
              Back to Home
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
