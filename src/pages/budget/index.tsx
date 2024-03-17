import Head from "next/head";
import Inner from "@/components/Inner";

export default function Budget() {
  return (
    <>
      <Head>
        <title>Budget | Cauê Henrique studio</title>
        <meta
          name="description"
          content="Let's schedule a call meeting to discuss the project and improve your company visual communication"
        />
      </Head>
      <Inner>
        <p>Budget Page</p>
      </Inner>
    </>
  );
}
