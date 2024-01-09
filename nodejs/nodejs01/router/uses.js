import express from "express";
import routerOrders from "./orders.js";
import userController from "../controllers/user.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();
//HTTP GET
router.get("/", (req, res) => {
  const { status, keyword } = req.query;
  console.log(status, keyword);
  res.send(`<h1>Danh sách người dùng</h1>
  <h2>Status: ${status}</h2>
  <h2>Keyword: ${keyword}</h2>`);
});

router.get("/add", userController.add);

router.get("/edit/:id", userController.edit);

//Order Router
router.use(roleMiddleware);
router.use("/orders", routerOrders);

export default router;
