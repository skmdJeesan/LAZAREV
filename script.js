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
    ease: "power2.inout",
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

function page2Animation() {
  let elems = document.querySelectorAll(".page2 .elem");
  //let elemImg = document.querySelector('.elem img');

  elems.forEach(function (elem) {
    let img = elem.childNodes[5];
    elem.addEventListener("mouseenter", function () {
      gsap.to(img, { opacity: 1, scale: 1 });
    });
    elem.addEventListener("mousemove", function (e) {
      gsap.to(img, {
        y: e.y - elem.getBoundingClientRect().y - 80,
        x: e.x - elem.getBoundingClientRect().x - 80,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(img, { opacity: 0, scale: 0 });
    });
  });
}

function page3videoAnimation() {
  let playBtn = document.querySelector(".page3-center");
  let video = document.querySelector(".page3 video");

  playBtn.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
      // zIndex: 99,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

navAnimation();
//videoconAnimation();
page2Animation();
page3videoAnimation();
