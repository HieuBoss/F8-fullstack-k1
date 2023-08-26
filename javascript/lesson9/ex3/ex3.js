var checkAll = document.querySelector(".check-all");

var checkItems = document.querySelectorAll(".check");
var count = 0;
checkAll.addEventListener("change", function () {
  count = checkAll.checked ? checkItem.length : 0;
  checkItem.forEach(function (checkItem) {
    checkItem.checked = checkAll.checked;
  });
});

checkItems.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    if (checkItem.checked) {
      count++;
    } else {
      count--;
    }
    console.log(count);

    if (count === checkItems.length) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }
  });
});
