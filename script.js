function navAnimation() {
  let icon = document.querySelector(".what .part1 .icon");
  let whatDiv = document.querySelector(".what");
  let navContent = document.querySelector(".nav-content");
  let nav = document.querySelector("nav");

  whatDiv.addEventListener("mouseenter", () => {
    icon.innerHTML = `<i class="ri-arrow-up-s-line"></i>`;
  });

  whatDiv.addEventListener("mouseleave", () => {
    icon.innerHTML = `<i class="ri-arrow-down-s-line"></i>`;
  });

  gsap.to(navContent, {
    height: "7vh",
    borderBottom: "0.7px solid rgb(118, 117, 117)",
    ease: "power2.inout",
    scrollTrigger: {
      trigger: navContent,
      scroller: "body",
      markers: false,
      start: "top 0%",
      end: "top -30%",
      scrub: true,
    },
  });

  gsap.to(nav, {
    height: "7vh",
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

function navBtnAnimation() {
  let btn = document.querySelector(".nav-right-btn");
  let txt = btn.querySelector("span"); // wrap your text in a <span>
  let icon = btn.querySelector("i");

  // btn.addEventListener('mouseenter', () => {
  //   txt.textContent = "Let's talk"
  //   icon.className = 'ri-arrow-right-up-line'
  //   icon.style.backgroundColor = '#0ba34e'
  //   icon.style.padding = '10px 14px'
  //   icon.style.borderRadius = '20px'
  //   btn.style.color = '#0ba34e'
  //   btn.style.backgroundColor = '#111'
  // })

  // btn.addEventListener('mouseleave', () => {
  //   txt.textContent = "Let's talk"
  //   icon.className = 'ri-pencil-fill'
  //   icon.style.backgroundColor = 'transparent'
  //   icon.style.padding = '0'
  //   icon.style.borderRadius = '0'
  //   btn.style.color = 'white'
  //   btn.style.backgroundColor = '#0ba34e'
  // })

  // Create a master timeline and pause it
  const hoverTl = gsap.timeline({ paused: true });

  hoverTl
    .to(
      btn,
      {
        backgroundColor: "#111",
        color: "#0ba34e",
        duration: 0.1,
        // gap: '10px',
      },
      0
    )
    .to(txt, { color: "#0ba34e" }, 0)
    .to(
      icon,
      {
        backgroundColor: "#0ba34e",
        padding: "8px 16px",
        borderRadius: "20px",
        duration: 0.2,
        ease: "power3.in",
      },
      0
    )
    .to(
      icon,
      {
        className: "ri-arrow-right-up-line",
        duration: 0.9, // instant class swap at start
      },
      0
    );

  btn.addEventListener("mouseenter", () => hoverTl.play());
  btn.addEventListener("mouseleave", () => hoverTl.reverse());
}

function page5Animation(){
  let sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    // elem -> sec-right
    let video = elem.childNodes[3];
    elem.addEventListener("mouseenter", function () {
      video.style.opacity = 1;
      video.play();
    });
    elem.addEventListener("mouseleave", function () {
      video.style.opacity = 0;
      video.load();
    });
  });
}

navAnimation();
navBtnAnimation();
//videoconAnimation();
page2Animation();
page3videoAnimation();
page5Animation();


