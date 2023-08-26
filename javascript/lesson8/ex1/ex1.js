var btn = document.querySelector(".btn");
var result = document.querySelector(".result");
var content = document.querySelector(".content");
var count = 0;
if (btn && content && result) {
  btn.addEventListener("click", function () {
    if (result.innerHTML === "") {
      result.innerHTML = content.innerHTML;
      content.innerHTML = "";
      this.querySelector(".text").innerText = "lên";
    } else {
      content.innerHTML = result.innerHTML;
      result.innerHTML = "";
      this.querySelector(".text").innerText = "xuống";
    }
    count++;
    // console.log(count);
    this.querySelector(".count").innerText = count;
  });
}
