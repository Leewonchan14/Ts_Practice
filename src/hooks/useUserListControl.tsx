import { useRef, useState } from "react";
import { User, UserProps } from "../UserList.tsx";
import { UserInputCompProps } from "../UserInputComp.tsx";
import { UserInput } from "./useUserInput.ts";

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

export const useUserListControl = ({ username, email }: UserInput) => {
  const [users, setUsers] = useState(initUsers);

  const nextId = useRef(initUsers.length - 1);

  const onCreate: UserInputCompProps["onCreate"] = () => {
    const newUser: User = {
      id: nextId.current,
      username: username,
      email: email,
    };
    setUsers([...users, newUser]);
    nextId.current += 1;
  };

  const onRemove: UserProps["onRemove"] = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return { users, onCreate, onRemove };
};
