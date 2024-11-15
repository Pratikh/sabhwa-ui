import { cn } from "@/lib/utils";

interface RadioProps {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  labelClassName?: string;
}
export default function Radio({
  id,
  name,
  value,
  className,
  labelClassName,
}: RadioProps) {
  return (
    <div className={className}>
      <input type="radio" id={id} name={name} value={value} />{" "}
      <label htmlFor={id} className={cn(labelClassName, "cursor-pointer")}>
        {value}
      </label>
    </div>
  );
}
