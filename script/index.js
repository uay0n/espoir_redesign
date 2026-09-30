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

gsap.timeline({
    scrollTrigger: {
        trigger: ".point_wrap",
        start: "top center",
        end: "bottom-=600 center",
        scrub: 1
    }
})
.to(".personal", {
    y: 0
}, 0)
.to(".model", {
    y: 0
}, 0)
.to(".custom", {
    y: 0
}, 0);
