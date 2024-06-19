import {
  UserInterface,
  UserOnRemove,
  UserOnToggle,
} from "./hooks/useUserListControl.ts";
import { useEffect } from "react";

interface UserListProps {
  users: UserInterface[];
  onRemove: UserOnRemove;
  onToggle: UserOnToggle;
}

const UserList = ({ users, onRemove, onToggle }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export interface UserProps {
  user: UserInterface;
  onRemove: UserOnRemove;
  onToggle: UserOnToggle;
}

const User = ({ user, onRemove, onToggle }: UserProps) => {
  useEffect(() => {
    console.log("user 값이 설정됨");
    console.log(user);
    return () => {
      console.log("user 값이 바뀌기 전");
      console.log(user);
    };
  }, [user]);

  const userNameStyle = {
    cursor: "pointer",
    fontWeight: "bold",
    color: user.active ? "green" : "black",
  };

  return (
    <div>
      <span style={userNameStyle} onClick={() => onToggle(user.id)}>
        {user.username}
      </span>{" "}
      <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

export default UserList;
