import React from "react";

function App() {
  // const h1 = React.createElement(
  //   "h1",
  //   {
  //     id: "title",
  //     className: "title",
  //     style: {
  //       color: "red",
  //       fontStyle: "italic",
  //     },
  //     onClick: (e) => {
  //       console.log("iu");
  //     },
  //   },
  //   "Hello F8"
  // );
  // const h2 = React.createElement("h2", {}, "Học react không khó mà là rất khó");
  // const number = 7;
  // const ranger = [...Array(number).keys()];
  // const li = ranger.map((index) =>
  //   React.createElement("li", {}, `item${index + 1}`)
  // );
  // const ul = React.createElement(
  //   "ul",
  //   {
  //     className: "menu",
  //   },
  //   ...li
  // );
  // const div = React.createElement(
  //   "div",
  //   {
  //     className: "container",
  //   },
  //   h1,
  //   ul,
  //   h2
  // );
  // const title = `ke tui`;
  // const isPrimary = true;
  // const Product = () => {
  //   return <h2>hi chào cậu</h2>;
  // };

  // const isLogin = true;

  // const h3 = (
  //   <div className="content">
  //     <Product />
  //     <h1>{title}</h1>
  //     {isLogin ? <h2>Đăng nhập thành công</h2> : <h3>Đăng nhập lại</h3>}
  //     <ul className="menu">
  //       <li>item1</li>
  //       <li>item1</li>
  //       <li>item3</li>
  //     </ul>
  //     <button
  //       className={`btn ${isPrimary ? "btn-primary" : ""} `}
  //       onClick={() => {
  //         handleClick();
  //       }}
  //     >
  //       Click me
  //     </button>
  //   </div>
  // );
  // function handleClick() {
  //   console.log("hello f8");
  // }
  // render 1 danh sách => về một array
  const lists = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div className="content">
      <h1>hehe</h1>
      {lists.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <ul className="menu">
        <li>item1</li>
        <li>item1</li>
        <li>item3</li>{" "}
      </ul>
    </div>
  );

  // Component :hàm , class có chữ đầu tiên viết hoa
}

export default App;
