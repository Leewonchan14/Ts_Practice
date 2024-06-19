import { UserInput, UserInputOnChange } from "../hooks/useUserInput.ts";
import { UserOnCreate } from "../hooks/useUserListControl.ts";

export interface UserInputCompProps {
  onChange: UserInputOnChange;
  onCreate: UserOnCreate;
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
