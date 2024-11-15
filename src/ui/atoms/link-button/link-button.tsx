import Button from "../button/button";

interface LinkButtonProps {
  href: string;
  buttonLabel: string;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}
export default function LinkButton({
  href = "",
  buttonLabel = "",
  variant = "default",
}: LinkButtonProps) {
  return (
    <a href={href}>
      <Button variant={variant}>{buttonLabel}</Button>
    </a>
  );
}
