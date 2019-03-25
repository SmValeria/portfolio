;(function () {

    const parallax = document.querySelector('.parallax-budda');
    const layers = parallax.children;
    
    function moveLayersOnMouseMove() {
        parallax.addEventListener('mousemove', function (e) {
            let x = e.clientX,
                y = e.clientY;
            Array.from(layers).forEach((item)=>{
                const deep = item.dataset.deep;
                const disallow = item.dataset.disallow;
                let itemX = (disallow && disallow === 'x') ? 0 : x / deep;
                let itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                if(disallow && disallow === 'both') return;
                item.style.transform = 'translateX(' + -itemX + '%) translateY(' + -itemY + '%)';
            });
        })
    }

    document.addEventListener("DOMContentLoaded", moveLayersOnMouseMove);

})();