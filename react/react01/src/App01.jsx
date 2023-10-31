import React, { Component } from "react";
import Header from "./Components/Header";
export default class App01 extends Component {
  render() {
    const menu = [
      {
        id: 1,
        link: "#",
        Menu: "menu1",
      },
      {
        id: 2,
        link: "#",
        Menu: "menu2",
      },
      {
        id: 3,
        link: "#",
        Menu: "menu3",
      },
    ];
    const user = {
      name: "Duy Hieu",
      email: "hieu@gmail.com",
      age: 20,
    };
    return (
      <div>
        <h1>react khó</h1>
        <Header title="Học lập trình tại f8" {...user} />
      </div>
    );
    //   Props => truyền từ component cha xuống component con
  }
}
