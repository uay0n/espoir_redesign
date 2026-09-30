//에스쁘아 js
const closeBtn = document.querySelector('.top_banner .close');
const banner = document.querySelector('.top_banner');

closeBtn.addEventListener('click', function(){
    banner.classList.add('hide');
});

gsap.registerPlugin(ScrollTrigger);

gsap.set(".personal", { y: 0 });
gsap.set(".model", { y: 300 });
gsap.set(".custom", { y: 500 });

gsap.fromTo(".personal", 
    { y: 0 }, 
    {
        y: 0,
        scrollTrigger: {
            trigger: ".point_wrap",
            start: "top top",
            end: "bottom-=400 center",
            scrub: 1,
            markers: true
        }
    }
);

gsap.fromTo(".model", 
    { y: 300 }, 
    {
        y: 0,
        scrollTrigger: {
            trigger: ".point_wrap",
            start: "top top",
            end: "bottom-=400 center",
            scrub: 1,
        }
    }
);

gsap.fromTo(".custom", 
    { y: 500 }, 
    {
        y: 0,
        scrollTrigger: {
            trigger: ".point_wrap",
            start: "top top",
            end: "bottom-=400 center",
            scrub: 1,
        }
    }
);