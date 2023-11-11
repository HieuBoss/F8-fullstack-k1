import React from "react";
import Counter from "./components/Counter";
import Search from "./components/Search";
import Video from "./components/video/Video";
import VideoPlayer from "./components/video/VideoPlayer";
import Counter2 from "./components/Counter2";
import Input from "./components/Input";

export default function App() {
  return (
    <div>
      <h1>useId</h1>
      <Input title={"Tên"} />
      <Input title={"Email"} />
      <Input title={"Địa chỉ"} />
    </div>
  );
}
