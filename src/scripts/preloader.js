;(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const preloader = document.querySelector('.preloader');

        let promise = new Promise(function (resolve) {
            setTimeout(() => {
                if(!preloader.classList.contains('loaded')){
                    preloader.classList.add('loaded');
                }
                resolve();
            },5000)
        }).then(function () {
            setTimeout(() => {
                preloader.style.display = "none";
            },2000)

        });
    })
})();