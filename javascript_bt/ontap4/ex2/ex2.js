const ul = document.createElement("ul");
document.body.appendChild(ul);
ul.innerText = " day la ul";

const li1 = document.createElement("li");
li1.textContent = "A";
const li2 = document.createElement("li");
li2.textContent = "3";

ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  // evt.target.style.visibility = "hidden";
  // evt.stopPropagation();
  console.log(evt.target);
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener("click", hide);
