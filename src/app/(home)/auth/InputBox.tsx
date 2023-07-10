import { Input } from "@nextui-org/react";
import { ChangeEvent, ReactNode } from "react";

interface IProps {
  id: string;
  icon: ReactNode;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: any;
  placeholder: string;
  type: string;
  error: string | undefined | false;
}

const InputBox = ({
  id,
  icon,
  label,
  onChange,
  value,
  placeholder,
  type,
  error
}: IProps) => {
  return <Input
    id={id}
    name={id}
    size="lg"
    type={type}
    label={label}
    placeholder={placeholder}
    labelPlacement="outside"
    startContent={icon}
    validationState={error ? "invalid" : "valid"}
    errorMessage={error}
    className="max-w-xs py-2"
    classNames={{
      input: [
        "placeholder:text-sm"
      ]
    }}
    value={value}
    onChange={onChange}
  />
}


export default InputBox;
