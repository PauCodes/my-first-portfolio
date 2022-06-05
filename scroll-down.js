const scrollTrigger = document.getElementById('scrollTrigger');
const target = document.getElementById('about');

scrollTrigger.addEventListener('click', function(e) {
    window.scroll({
        top: target.offsetTop,
        left: 0,
        behavior: 'smooth'});
}, false)