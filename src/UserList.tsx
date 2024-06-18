interface UserListProps {
  users: User[];
  onRemove: UserProps["onRemove"];
}

const UserList = ({ users, onRemove }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export interface UserProps {
  user: User;
  onRemove: (id: number) => void;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

const User = ({ user, onRemove }: UserProps) => {
  return (
    <div>
      <strong>{user.username}</strong> <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

export default UserList;
