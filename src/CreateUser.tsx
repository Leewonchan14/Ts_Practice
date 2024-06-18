import { ChangeEvent } from "react";

export interface CreateUserProps {
  username: string;
  email: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCreate: () => void;
}

const CreateUser = ({
  username,
  email,
  onChange,
  onCreate,
}: CreateUserProps) => {
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

export default CreateUser;
