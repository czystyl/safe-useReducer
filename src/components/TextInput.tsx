import { ChangeEvent } from 'react';

type TextInputProps = {
  value: string;
  placeholder: string;
  onChange(arg: string): void;
};

function TextInput(props: TextInputProps) {
  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    props.onChange(event.target.value);
  }

  return (
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-green-900 leading-tight focus:outline-none focus:shadow-outline mr-4`}
      value={props.value}
      type="text"
      placeholder={props.placeholder}
      onChange={handleTextChange}
    />
  );
}

export default TextInput;
