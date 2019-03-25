const parallax = document.querySelector('.parallax-hero');
const layers = parallax.children;

function moveLayersOnScroll(wScroll) {
    Array.from(layers).forEach((item)=>{
        const divider = item.dataset.speed;
        const strafe = wScroll * divider / 10;

        item.style.transform = `translateY(-${strafe}%)`;
    })
}

window.addEventListener('scroll', function () {
    const wScroll = window.pageYOffset;
    moveLayersOnScroll(wScroll);
});