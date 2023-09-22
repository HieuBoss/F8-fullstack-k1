var host = document.querySelector("#shadow-root");

var root = host.attachShadow({ mode: "open" });
console.log(root);
root.innerHTML = `<style>
p{
  color:red
}
</style>
<p>khong co them</p>
<h2>Hoang an</h2>`;
