import express from "express";
import expressLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import session from "express-session";
import flash from "connect-flash";
import routerIndex from "./router/index.js";
import routerUsers from "./router/uses.js";
import routerAuth from "./router/auth.js";
import authMiddleware from "./middlewares/auth.middleware.js";
const app = express();
const port = 8080;

// static file
app.use(express.static("public"));
// setup template engine
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);
// layout
app.set("layout", "layout/layout.default.ejs");
// parse body
// app.use(bodyParser.urlencoded({ extended: false })); //hỗ trợ nhận dữ liệu ở dạng application/x-www-urlencoded
// app.use(bodyParser.json()); //hỗ trợ nhận dữ liệu ở dạng application/json
// Ở phiên bản express 4.16 trở lên

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//session
app.use(
  session({
    name: "f8_session_id",
    secret: "f8",
    resave: false,
    saveUninitialized: true,
  })
);
// connect-flash
app.use(flash());

// routing
app.use(routerAuth);
app.use(authMiddleware);
app.use(routerIndex);
app.use("/users", routerUsers);

app.listen(port, () => {
  console.log("Server dang chay: http://localhost:8080");
});
