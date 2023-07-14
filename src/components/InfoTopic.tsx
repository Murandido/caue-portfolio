export default function InfoTopic({ text }: { text: string }) {
  return (
    <div className="flex justify-center border-b border-[#D9D9D9] text-2xl">
      <p className="my-24 w-[80rem]">{text}</p>
    </div>
  );
}
