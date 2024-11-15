import Tuple from "../tuple";

export default function Topic({ text }: { text: string }) {
  return (
    <div className="flex  gap-[10px] md:gap-[15px] w-full  bg-[#212121BF] md:bg-white py-[12px] px-[18px] md:py-[24px] md:px-auto flex-col items-start md:items-center md:flex-row">
      {" "}
      <Tuple text="Topic" variant="default" size="default" />
      <p className="text-[14px] md:text-[24px] font-medium leading-[20px] md:leading-[34.75px] text-left text-white md:text-black">
        {text}
      </p>
    </div>
  );
}
