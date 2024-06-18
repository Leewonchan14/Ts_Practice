import React, { ChangeEvent, useState } from "react";

const InputSample = () => {
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setInput("");
  };

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {input}</b>
      </div>
    </div>
  );
};

export default InputSample;
