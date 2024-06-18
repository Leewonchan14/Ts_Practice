interface HelloProps {
  name?: string;
  color?: string;
}

const Hello = ({ name, color }: HelloProps) => {
  return <div style={{ color: color }}>{name}</div>;
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
