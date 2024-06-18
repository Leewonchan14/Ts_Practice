import { useState } from "react";
import { UserInputCompProps } from "../UserInputComp.tsx";

export interface UserInput {
  email: string;
  username: string;
}

export const initUserInput: UserInput = {
  email: "",
  username: "",
};

export const useUserInput = () => {
  const [inputs, setInputs] = useState(initUserInput);
  // const { email, username } = inputs;
  const onChange: UserInputCompProps["onChange"] = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return { inputs, onChange };
};
