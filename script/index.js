//에스쁘아 js
const closeBtn = document.querySelector('.top_banner .close');
const banner = document.querySelector('.top_banner');

closeBtn.addEventListener('click', function(){
    banner.classList.add('hide');
});