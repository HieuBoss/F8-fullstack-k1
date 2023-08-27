var openLogin = document.querySelector(".open-login");
var modalAuth = document.querySelector(".modal-auth");
var modalOverlay = modalAuth.querySelector(".overlay");

var tabNavItems = document.querySelectorAll(".tab-nav a");
var closeModal = function () {
  modalAuth.classList.remove("show");
};

openLogin.addEventListener("click", function () {
  modalAuth.classList.add("show");
});
modalOverlay.addEventListener("click", closeModal);
tabNavItems.forEach((navItem) => {
  navItem.addEventListener("click", function () {
    var activeTab = modalAuth.querySelector(".tab-nav a.active");
    activeTab.classList.remove("active");

    this.classList.add("active");
    var hash = this.getAttribute("href");

    var tabPanel = modalAuth.querySelector(".tab-content .tab-panel" + hash);
    var tabPanelActive = modalAuth.querySelector(
      ".tab-content .tab-panel.active"
    );
    tabPanelActive.classList.remove("active");
    tabPanel.classList.add("active");
  });
});
