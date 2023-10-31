import "./Assets/Footer.scss";
import "./Assets/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import image from "./image/img1.jpg";
import { header } from "./components/header";
import { footer } from "./components/Footer";
import config from "./config.json";
console.log(process.env.APP_NAME);

const { SERVER_API } = config;
console.log(SERVER_API);
export const App = () => {
  return `<div class="container">
  ${header()}
  <main>
  <h1>Hello F88</h1>
  <a href="#" class="btn btn-primary">Hello F88</a>
  <hr/>
${moment().format("DD/MM/YYYY HH:mm:ss")}
<img src="${image} "width="300"/>
<hr/>
Server API: ${SERVER_API}
  </main>
  ${footer()}
  </div>`;
};
