interface User {
  id: number;
  username: string;
  email: string;
}

const users: User[] = [
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

const UserList = () => {
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
