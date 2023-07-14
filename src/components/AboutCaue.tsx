import Image from "next/image";

export default function AboutCaue() {
  return (
    <div className="m-5 flex justify-center gap-5">
      <div>
        <Image
          className="w-[58rem]"
          src="https://i.imgur.com/85lzxfe.png"
          width={930}
          height={1050}
          alt="Personal Image of Cauê Henrique"
        />
      </div>
      <div className="flex w-[58rem] items-center justify-center bg-white">
        <div className="m-5 flex w-[28rem] flex-col gap-10 font-robotoSlab text-xl">
          <p className="font-righteous">Who is Cauê Henrique?</p>
          <p>
            Hello, I am a brand designer, user interface, and experience
            designer. I work in this studio as a creative director and brand
            designer. My goal as a professional is to create designs that have a
            lasting impact and leave a memorable impression. I believe that a
            company&apos;s design should go beyond just a logo; it should be
            easily recognizable in all aspects, even in situations where the
            logo cannot be easily viewed, such as billboards.
          </p>
          <p>
            With this vision in mind, I am excited to establish a partnership
            with your company and create an incredible identity that will set
            you apart in the market.
          </p>
        </div>
      </div>
    </div>
  );
}
