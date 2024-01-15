var express = require("express");
var router = express.Router();
const sendMail = require("../utils/mail");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/send-mail", async (req, res) => {
  const info = await sendMail(
    "hieu.nd.1995@aptechlearning.edu.vn",
    "Hello Hiếu",
    "Tôi là sinh viên trường bạn đây"
  );
  res.send("Gui mail");
});
module.exports = router;
