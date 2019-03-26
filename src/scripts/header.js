;(function () {
    function stickyHeader() {
        const header = document.querySelector('.hero__header');
        const headerHeight = header.offsetHeight;
        const sections = document.querySelectorAll('.section');

        window.addEventListener('scroll', () => {
            let offset = window.pageYOffset;

            sections.forEach((section,index)=>{

                let itemTopPosition = section.getBoundingClientRect().top + offset - headerHeight;
                let itemBottomPosition = itemTopPosition + section.clientHeight;


                if(offset >= itemTopPosition && offset <= itemBottomPosition) {
                    sections.forEach((item) => {
                        if(section !== item) {
                            item.classList.remove('active');
                            let itemID = '#' + item.getAttribute('id');

                            let link = header.querySelector(`[href='${itemID}']`);

                            link.closest('.menu__item').classList.remove('active');
                        }
                    });
                    section.classList.add('active');
                    let itemID = '#' + section.getAttribute('id');

                    let link = header.querySelector(`[href='${itemID}']`);

                    link.closest('.menu__item').classList.add('active');
                }
            });
            if (window.pageYOffset > 100) {
                header.classList.add('header--sticky');
            } else {
                header.classList.remove('header--sticky');
            }
        })
    }

    document.addEventListener("DOMContentLoaded", stickyHeader)
})();

