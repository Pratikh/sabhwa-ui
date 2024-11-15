export default function UserName({
  firstName,
  lastName,
  nickName = "",
  countryCode = "in",
}: {
  firstName: string;
  lastName: string;
  nickName?: string;
  countryCode: string;
}) {
  return (
    <div className="flex gap-3 bg-[#18181878] px-[10px] py-[6px] rounded-[6px] text-white">
      <img
        src={`https://flagcdn.com/h20/${countryCode}.png`}
        alt="Country flag"
      />
      {firstName}&nbsp;{lastName}
      {nickName && `(${nickName})`}
    </div>
  );
}
