import { useRef, useState } from "react";
import { UserInput } from "./useUserInput.ts";

export const initUsers: UserInterface[] = [
  {
    id: 1,
    username: "velopert",
    email: "public.velopert@gmail.com",
    active: true,
  },
  {
    id: 2,
    username: "tester",
    email: "tester@example.com",
    active: false,
  },
  {
    id: 3,
    username: "liz",
    email: "liz@example.com",
    active: false,
  },
];

export interface UserInterface {
  id: number;
  username: string;
  email: string;
  active: boolean;
}

export type UserOnRemove = (userId: number) => void;
export type UserOnToggle = (userId: number) => void;
export type UserOnCreate = () => void;

export type UseUserListControl = ({ username, email }: UserInput) => {
  users: UserInterface[];
  onRemove: UserOnRemove;
  onCreate: UserOnCreate;
  onToggle: UserOnToggle;
};

export const useUserListControl: UseUserListControl = ({ username, email }) => {
  const [users, setUsers] = useState(initUsers);

  const nextId = useRef(4);

  const onCreate: UserOnCreate = () => {
    const newUser: UserInterface = {
      id: nextId.current,
      username: username,
      email: email,
      active: false,
    };
    setUsers([...users, newUser]);
    nextId.current += 1;
  };

  const onRemove: UserOnRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle: UserOnToggle = (userId) => {
    setUsers(
      users.map((user) => {
        if (user.id !== userId) return user;

        return {
          ...user,
          active: !user.active,
        };
      })
    );
  };

  return { users, onCreate, onRemove, onToggle };
};
