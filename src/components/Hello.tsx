import Wrapper from "./Wrapper.tsx";

interface HelloProps {
  name?: string;
  color?: string;
  isSpecial?: boolean;
}

const Hello = ({ name, color, isSpecial }: HelloProps) => {
  return (
    <Wrapper>
      <div style={{ color: color }}>
        {isSpecial && "*"}
        {name}
      </div>
    </Wrapper>
  );
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
