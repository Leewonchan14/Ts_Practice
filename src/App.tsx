import UserList, { User } from "./UserList.tsx";
import CreateUser, { CreateUserProps } from "./CreateUser.tsx";
import { useRef, useState } from "react";

export const initUsers: User[] = [
  {
    id: 1,
    username: "velopert",
    email: "public.velopert@gmail.com",
  },
  {
    id: 2,
    username: "tester",
    email: "tester@example.com",
  },
  {
    id: 3,
    username: "liz",
    email: "liz@example.com",
  },
];

export interface UserInputs {
  email: string;
  username: string;
}

function App() {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
  });
  const { email, username } = inputs;
  const [users, setUsers] = useState(initUsers);

  const nextId = useRef<number>(4);

  const onChange: CreateUserProps["onChange"] = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate: CreateUserProps["onCreate"] = () => {
    const newUser: User = {
      id: nextId.current,
      username: inputs.username,
      email: inputs.email,
    };
    setUsers([...users, newUser]);
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
