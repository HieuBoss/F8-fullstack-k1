import dotenv from "dotenv";
dotenv.config();
import { App } from "./app";
const root = document.querySelector("#root");
root.innerHTML = App();
