import React from "react";

const Store = React.createContext();

const ContextDemo = () => {
  const text = "random text";
  return (
    <div>
      <h1>Hi!</h1>
    </div>
  );
};

const Child = () => {};

export default ContextDemo;
