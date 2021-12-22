const MyComponent = ({ name, name2, children }) => {
  return (
    <>
      안녕하세요, 제 이름은 {name} 입니다. {name2}
      <div>{children}</div>
    </>
  );
};

export default MyComponent;
