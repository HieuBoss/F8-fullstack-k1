// const http = require("http");

// const getProducts = require("./modules/product");
// getProducts();
import http from "http";
import { getProducts } from "./modules/product.js";
getProducts();
const server = http.createServer((req, res) => {
  const path = req.url;
  const cookie = req.headers["cookie"];
  //   console.log(cookie);
  const method = req.method;
  console.log(method);

  res.setHeader("abc", "xyz");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Set-Cookie", "name=duyhieu;Path=/;Max-Age=86400;HttpOnly");
  res.statusCode = 200;
  if (path === "/") {
    res.write("<h1>Học nodejs không khó</h1>");
  } else if (path === "/san-pham") {
    res.write("<h1>San pham</h1>");
  } else {
    res.write("<h1>Page Not Found</h1>");
  }
  // Set cookie
  res.end();
});
server.listen("8080", "localhost", () => {
  console.log("Server dang chay: http://localhost:8080");
});

/*
Các package hay dùng của nodejs (không cần phải cài)

http
fs
path

CommonJS Module --> Sử dụng require
ES6 Module --> sử dụng import / export
*/
