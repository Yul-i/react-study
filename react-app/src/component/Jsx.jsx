const Jsx = () => {
  const name = "리액트";

  //falsy : 0 underfined false null NaN ""

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <div style={style}>{name}</div>
      <h1 className="react">리액트 {name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
      {name === "리액트!" ? <h1>리액트입니다.</h1> : <h2>리액트가 아니다.</h2>}

      {name === "리액트!" && <h1>리액트 입니다.123</h1>}

      {name === 0 || "값이 falsy 합니다."}
    </>
  );
};

export default Jsx;
