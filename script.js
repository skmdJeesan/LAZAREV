function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function loadingAnimation(){
  let tl = gsap.timeline()
  tl.from(".page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2
  })
  tl.from('.page1', {
    duration: 2,
    transform: 'scaleX(0.7) scaleY(0.2) translateY(80%)',
    // borderRadius: "50px",
    ease: 'expo.out',
  })
  tl.from("nav", {
    opacity: 0,
    delay: -0.2
  })
  tl.from(".page1 h1, .page1 p, .page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  })
}

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
      scroller: "#main",
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
      scroller: "#main",
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

function page6Animation(){
  let icon1 = document.querySelector('.uiux details summary span i')
  let summary1 = document.querySelector('.uiux details summary')

  let flag1 = "down"
  summary1.addEventListener('click', function(){
    if(flag1 === "down") {
      icon1.className = `ri-arrow-drop-up-line`
      flag1 = "up"
    } else {
      icon1.className = `ri-arrow-drop-down-line`
      flag1 = "down"
    }
  })

  let icon2 = document.querySelector('.product details summary span i')
  let summary2 = document.querySelector('.product details summary')

  let flag2 = "down"
  summary2.addEventListener('click', function(){
    if(flag2 === "down") {
      icon2.className = `ri-arrow-drop-up-line`
      flag2 = "up"
    } else {
      icon2.className = `ri-arrow-drop-down-line`
      flag2 = "down"
    }
  })

  let uiux = document.querySelector('.uiux details summary .part1')
  let product = document.querySelector('.product details summary .part1')

  let flag3 = false
  uiux.addEventListener('click',function(){
    if(flag3) {
      uiux.style.borderTop = '2px solid white'
      flag3 = false
    } else {
      uiux.style.borderTop = '1px solid #222'
      flag3 = true
    }
  })

  let flag4 = true
  product.addEventListener('click',function(){
    if(flag4) {
      product.style.borderTop = '2px solid white'
      flag4 = false
    } else {
      product.style.borderTop = '1px solid #222'
      flag4 = true
    }
  })

  gsap.to('.uiux .part1 i', {
    backgroundColor: '#444',
    ease: 'expo.out',
    duration: 0.2,
    scrollTrigger: {
      trigger: '.uiux .part1 i',
      scroller: '#main',
      markers: false,
      start: 'top 70%',
      end: 'top 0%',
      scrub: 2,
    }
  })

}

function page7Animation() {
  gsap.from('.page7 .bottom .elm h4', {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.page7 .bottom .elm h4',
      scroller: '#main',
      markers: false,
      start: 'top 70%',
      end: 'top 0%',
      scrub: 2,
    }
  })
}

locomotiveAnimation();
loadingAnimation();
navAnimation();
navBtnAnimation();
//videoconAnimation();
page2Animation();
page3videoAnimation();
page5Animation();
page6Animation();
page7Animation();





