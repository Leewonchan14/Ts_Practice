import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const wrapperStyle = {
    width: "100%",
    border: "2px solid black",
  };

  return <div style={wrapperStyle}>{children}</div>;
};

export default Wrapper;
