var Swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});

$(document).ready(function () {
  // Smooth scroll function
  $(".nav-link").click(function (e) {
    e.preventDefault();

    const target = $(this.getAttribute("href"));
    const offset = 0; // Adjust if you need some offset

    $("html, body").animate(
      {
        scrollTop: target.offset().top - offset,
      },
      1500,
      "easeInOutQuart"
    ); // Smooth easing function
  });

  // Update active nav link on scroll with debounced scroll event
  let scrollTimeout;
  $(window).scroll(function () {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = requestAnimationFrame(function () {
      const scrollPosition = $(window).scrollTop();

      // Check each section and update nav accordingly
      $("section").each(function () {
        const top = $(this).offset().top - 100;
        const bottom = top + $(this).outerHeight();

        if (scrollPosition >= top && scrollPosition < bottom) {
          const id = $(this).attr("id");
          $(".nav-link").removeClass("active");
          $(`.nav-link[href="#${id}"]`).addClass("active");
        }
      });
    });
  });

  // Initial check for active section on page load
  setTimeout(function () {
    $(window).trigger("scroll");
  }, 100);
});
