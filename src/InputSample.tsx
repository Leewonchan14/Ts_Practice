import { ChangeEvent, useRef, useState } from "react";

const InputSample = () => {
  const nameInput = useRef<HTMLInputElement>(null);

  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput?.current?.focus();
  };

  return (
    <div>
      <input
        ref={nameInput}
        name={"name"}
        placeholder="이름"
        onChange={onChange}
        value={inputs.name}
      />
      <input
        name={"nickname"}
        placeholder="닉네임"
        onChange={onChange}
        value={inputs.nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {inputs.name} {inputs.nickname}
      </div>
    </div>
  );
};

export default InputSample;
