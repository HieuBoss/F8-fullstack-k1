const today = new Date();

// console.log(today);
// const targetDate = new Date("2023/10/21 09:02:50");
// console.log(targetDate);
const days = [
  "chủ nhật",
  "thứ hai",
  "thứ ba",
  "thứ bốn",
  "thứ năm",
  "thứ sáu",
  "thứ bảy",
];
setInterval(() => {
  const today = new Date();
  //   today.setDate(today.getDate() + 1);
  const output = `${
    days[today.getDate()]
  },ngày${today.getDate()} tháng ${today.getMonth()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  document.body.innerHTML = output;
}, 1000);
