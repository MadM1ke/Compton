// Burger - меню
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".header__nav-link");

burger.addEventListener(
   "click",

   function () {
      burger.classList.toggle("burger--active");

      menu.classList.toggle("header__nav--active");
   }
);

menuLinks.forEach(function (element) {
   burger.classList.remove("burger--active");

   menu.classList.remove("header__nav--active");
});

// Map
ymaps.ready(init);
function init() {
   // Создание карты.
   var myMap = new ymaps.Map("mapYandex", {
      center: [44.053962, 43.04261],
      zoom: 17,
   });

   var myPlacemark = new ymaps.Placemark(
      [44.053962, 43.04261],
      {},
      {
         iconLayout: "default#image",
         iconImageHref: "../img/flag-for-map.svg",
         iconImageSize: [48, 48],
         iconImageOffset: [-20, -48],
      }
   );
   myMap.geoObjects.add(myPlacemark);
}
