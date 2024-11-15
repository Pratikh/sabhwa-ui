import Tuple from "../tuple";

export default function Topic({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[15px] bg-white w-full">
      {" "}
      <Tuple text="Topic" variant="default" size="default" />
      <p className="text-[24px] font-medium leading-[34.75px] text-left">
        {text}
      </p>
    </div>
  );
}
