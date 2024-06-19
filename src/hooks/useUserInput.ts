import { ChangeEvent, useState } from "react";

export interface UserInput {
  email: string;
  username: string;
}

export type UserInputOnChange = (e: ChangeEvent<HTMLInputElement>) => void;

export type UseUserInput = () => {
  inputs: UserInput;
  onChange: UserInputOnChange;
};

export const useUserInput: UseUserInput = () => {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
  });
  const onChange: UserInputOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return { inputs, onChange };
};
