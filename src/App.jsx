import React from "react";

const App = () => {
  const onClickButton = () => {
    alert("test");
  };
  const contentStyle = {
    color: "blue",
    fontaSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
