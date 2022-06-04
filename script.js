document.addEventListener("DOMContentLoaded", function () {
  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".header__nav");
  let menuLinks = document.querySelectorAll(".header__link");

  burger.addEventListener(
    "click",

    function () {
      burger.classList.toggle("burger--active");
      document.body.classList.toggle("body--overflow-hidden");
      menu.classList.toggle("header__nav--active");
    }
  );
  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      burger.classList.remove("burger--active");

      menu.classList.remove("header__nav--active");
    });
  });

  let articlesMore = document.querySelector(".articles-more");
  let articles = document.querySelectorAll(".articles-item");

  articlesMore.addEventListener(
    "click",

    function () {
      articles.forEach(function (el) {
        el.classList.add("articles-item--visible");
      });

      articlesMore
        .closest(".articles-center")
        .classList.add("articles-center--hidden");
    }
  );
});
