import React from 'react';

function Hello() {
  const person = {
    name: 'Peter',
    theme: {
      backgroundColor: 'green',
      color: 'white'
    }
  };

  const hiAll = () => {
    alert("hello everyone");
  };

  const hiYou = (name) => {
    alert("Hello " + name);
  };

  return (
    <div style={person.theme}>
      <h1>Xin chào: {person.name}</h1>
      <div>Chúc bạn thành công với React</div>
      <span>
        <button onClick={hiAll}>Hi All</button>
        <button onClick={() => hiYou("User")}>Hi you</button>
      </span>
    </div>
  );
}

// Xuất khẩu mặc định cho Hello
export default Hello;

function HelloPerson({ name }) {
  return <h1>Xin chào bạn: {name}</h1>;
}

// Xuất khẩu named export cho HelloPerson
export { HelloPerson };
