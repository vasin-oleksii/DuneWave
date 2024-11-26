document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#carouselExampleSlidesOnly");
  const interval = 3000;

  let activeIndex = 0;
  const items = carousel.querySelectorAll(".carousel-item");

  function showNextSlide() {
    items[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + 1) % items.length;
    items[activeIndex].classList.add("active");
  }

  setInterval(showNextSlide, interval);
});
