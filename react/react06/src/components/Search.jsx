import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Search() {
  //   const helloRef = useRef(0);
  //   const [number, setNumber] = useState(0);
  //   let a = 0;

  //   const handelClick = () => {
  //     setNumber(number + 1);
  //     helloRef.current++;
  //     a++;
  //     console.log(`Ref:${helloRef.current} number:${number}`);
  //   };
  const inputRef = useRef();
  const buttonRef = useRef();
  //   console.log("1");
  useEffect(() => {
    inputRef.current.focus();
    // console.log("3");
  }, []);
  console.log(buttonRef);
  return (
    <div>
      {/* {console.log("2")} */}
      <input ref={inputRef} type="text" placeholder="Tìm kiếm gì bạn ơi ..." />
      {/* <button>Click me</button> */}
      <Button ref={buttonRef} />
    </div>
  );
}
