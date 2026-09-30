//에스쁘아 js
const closeBtn = document.querySelector('.top_banner .close');
const banner = document.querySelector('.top_banner');

closeBtn.addEventListener('click', function(){
    banner.classList.add('hide');
});

gsap.registerPlugin(ScrollTrigger);

gsap.set(".personal", { y: -1000 });
gsap.set(".model", { y: 500 });
gsap.set(".custom", { y: 1000 });

gsap.fromTo(".personal", 
    { y: -1000 }, 
    {
        y: 0,
        scrollTrigger: {
            trigger: ".point_wrap",
            start: "top top",
            end: "bottom-=1000 center",
            scrub: 1,
            markers: true
        }
    }
);

gsap.fromTo(".model", 
    { y: 500 }, 
    {
        y: 0,
        scrollTrigger: {
            trigger: ".point_wrap",
            start: "top top",
            end: "bottom-=1000 center",
            scrub: 1,
        }
    }
);

gsap.fromTo(".custom", 
    { y: 1000 }, 
    {
        y: 0,
        scrollTrigger: {
            trigger: ".point_wrap",
            start: "top top",
            end: "bottom-=1000 center",
            scrub: 1,
        }
    }
);