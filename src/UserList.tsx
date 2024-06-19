import {
  UserInterface,
  UserOnRemove,
  UserOnToggle,
} from "./hooks/useUserListControl.ts";
import { useEffect, useMemo } from "react";

interface UserListProps {
  users: UserInterface[];
  onRemove: UserOnRemove;
  onToggle: UserOnToggle;
}

const countActiveUsers = (users: UserInterface[]) => {
  console.log("활성화된 유저 수를 세는 중...");
  return users.filter((user) => user.active).length.toString();
};

const UserList = ({ users, onRemove, onToggle }: UserListProps) => {
  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <div>활성화된 유저수 : {count}</div>
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
    console.log(user);
  }, []);

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
