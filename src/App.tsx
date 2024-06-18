import Hello from "./Hello.tsx";

function App() {
  return (
    <>
      <Hello name={"이원찬"} color={"red"} isSpecial />
      <Hello name={"김원찬"} color={"blue"} isSpecial={true} />
      <Hello color={"black"} isSpecial={false} />
    </>
  );
}

export default App;
