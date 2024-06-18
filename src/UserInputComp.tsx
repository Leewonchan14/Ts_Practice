import { ChangeEvent } from "react";
import { UserInput } from "./hooks/useUserInput.ts";

export interface UserInputCompProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCreate: () => void;
  inputs: UserInput;
}

const UserInputComp = ({ onChange, onCreate, inputs }: UserInputCompProps) => {
  const { username, email } = inputs;
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default UserInputComp;
