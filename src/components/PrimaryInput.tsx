import { ChangeEvent, VFC } from "react";

type Props = {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PrimaryInput: VFC<Props> = (props) => {
  const { value, placeholder, onChange } = props;
  return (
    <input
      className="block w-full p-2.5 text-black bg-white rounded-md"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

