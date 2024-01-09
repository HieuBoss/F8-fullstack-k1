const homeController = {
  index: (req, res) => {
    // res.send("<h1>Học express không khó</h1>");
    const title = "<i>Học back-end dễ hơn font-end</i>";
    const check = true;
    const users = ["User1", "User2", "User3", "User4"];
    req.session.message = "hello f8";
    req.session.user = { name: "Duy hieu", email: "hieu@gmail.com" };
    delete req.session.message;
    res.render("home/index", { title, check, users });
  },
  showProducts: (req, res) => {
    console.log(req.session.message);
    console.log(req.session.user);
    res.render("home/products");
  },
};

export default homeController;
