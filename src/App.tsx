import UserList from "./UserList.tsx";
import UserInputComp from "./UserInputComp.tsx";
import { useUserListControl } from "./hooks/useUserListControl.tsx";
import { useUserInput } from "./hooks/useUserInput.ts";

function App() {
  const { inputs, onChange } = useUserInput();
  const { users, onRemove, onCreate } = useUserListControl(inputs);

  return (
    <>
      <UserInputComp inputs={inputs} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
