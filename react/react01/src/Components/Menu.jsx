import React from "react";

const Menu = (props) => {
  const { menu, onReceiveData } = props;
  const handleClick = () => {
    onReceiveData("Hello em");
    props.name = "123";
  };
  return (
    <>
      <nav className="menu">
        {menu?.length &&
          menu?.map(({ id, link, title }) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
      </nav>
      <hr />
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default Menu;
