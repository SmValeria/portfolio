import Vue from "vue"

const thumbs = {
    template: "#slider-thumbs",
    props: {
        works: Array,
        currentWork: Object
    }
};

const controls = {
    template: "#slider-btns",
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number,
        lastIndexOfWorkArray: Number
    }
};

const display = {
    template: "#slider-display",
    components: {
        thumbs,
        controls
    },
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number
    },
    computed: {
        reverseWorks(){
            const works = [...this.works];
            return works.reverse();
        },
        lastIndexOfWorkArray() {
            return this.works.length -1;
        }
    }
};

const tags = {
    template: "#slider-tags",
    props: {
        tagsArray: Array
    }
};

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: {
        currentWork: Object
    },
    computed: {
        tagsArray(){
            return this.currentWork.skills.split(",")
        }
    }
};

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display,
        info
    },
    data(){
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork(){
            return this.works[this.currentIndex]
        }
    },
    watch: {
        currentIndex(value) {
            this.makeLimitedLoopForCurIndex(value);
        }
    },
    methods: {
        reRenderThumbnails(index) {
            const container = document.querySelector('.thumbnail');
            const containerHeight = container.offsetHeight;
            const list = container.querySelector('.thumbnail__list');
            const itemHeight = list.querySelector('.thumbnail__item').offsetHeight;
            const countVisibleItems =  (containerHeight / itemHeight) - 1;
            
            if (index === this.works.length) return;
            if(index <= countVisibleItems) {
                list.style.transform = `translateY(0px)`;
                return
            }
            let offset = (index - countVisibleItems) * itemHeight;

            list.style.transform = `translateY(${offset}px)`;

        },
        makeLimitedLoopForCurIndex(value) {
            const worksAmount = this.works.length - 1;
            if (value > worksAmount) this.currentIndex = worksAmount;
            if (value < 0) this.currentIndex = 0;
        },
        makeArrWithRequiredPathImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/${item.path}`);
                item.path = requiredPic;

                return item;
            });
        },
        handleSlide(direction) {
            switch (direction) {
                case 'next':
                    this.currentIndex++;
                    break;
                case 'prev':
                    this.currentIndex--;
                    break;
            }

            this.reRenderThumbnails(this.currentIndex);
        },
        setSlide(index) {
            this.currentIndex = index;
        }
    },
    created() {
        const data = require("../data/work.json");
        this.works = this.makeArrWithRequiredPathImages(data);
    }
});