export interface User {
  id: number;
  username: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

const User = ({ user }: { user: User }) => {
  return (
    <div>
      <strong>{user.username}</strong> <span>{user.email}</span>
    </div>
  );
};

export default UserList;
