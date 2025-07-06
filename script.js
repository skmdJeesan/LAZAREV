function navAnimation() {
  let icon = document.querySelector(".what .part1 .icon");
  let whatDiv = document.querySelector(".what");
  let nav = document.querySelector("nav");

  whatDiv.addEventListener("mouseenter", () => {
    icon.innerHTML = `<i class="ri-arrow-up-s-line"></i>`;
  });

  whatDiv.addEventListener("mouseleave", () => {
    icon.innerHTML = `<i class="ri-arrow-down-s-line"></i>`;
  });

  gsap.to(nav, {
    height: "6vh",
    borderBottom: "0.7px solid rgb(118, 117, 117)",
    ease: 'power2.inout',
    scrollTrigger: {
      trigger: nav,
      scroller: "body",
      markers: false,
      start: "top 0%",
      end: "top -30%",
      scrub: true,
    },
  });
}

function videoconAnimation() {
  let videocon = document.querySelector(".video-container");
  let play = document.querySelector(".play");

  videocon.addEventListener("mouseenter", function () {
    gsap.to(play, { opacity: 1, scale: 1 });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(play, { opacity: 0, scale: 0 });
  });

  videocon.addEventListener("mousemove", function (e) {
    gsap.to(play, { left: e.x, top: e.y });
  });
}

navAnimation();
videoconAnimation();
