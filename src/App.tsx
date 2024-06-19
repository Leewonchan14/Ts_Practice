import UserList from "./UserList.tsx";
import UserInputComp from "./UserInputComp.tsx";
import { useUserInput } from "./hooks/useUserInput.ts";
import { useUserListControl } from "./hooks/useUserListControl.ts";

function App() {
  const { inputs, onChange } = useUserInput();
  const { users, onRemove, onCreate, onToggle } = useUserListControl(inputs);

  return (
    <>
      <UserInputComp inputs={inputs} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
