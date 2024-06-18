import Wrapper from "./Wrapper.tsx";

interface HelloProps {
  name?: string;
  color?: string;
}

const Hello = ({ name, color }: HelloProps) => {
  return (
    <Wrapper>
      <div style={{ color: color }}>{name}</div>
    </Wrapper>
  );
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
