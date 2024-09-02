interface RadioProps {
  id?: string;
  name?: string;
  value?: string;
}
export default function Radio({ id, name, value }: RadioProps) {
  return (
    <div>
      <input type="radio" id={id} name={name} value={value} />{" "}
      <label htmlFor={id}>{value}</label>
    </div>
  );
}
