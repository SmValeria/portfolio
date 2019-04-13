import Vue from "vue";
import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';

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
            return this.currentWork.techs.split(", ")
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
            const baseUrl = axios.defaults.baseURL;
            return data.map(item => {
                const requiredPic = `${baseUrl}/${item.photo}`;
                item.photo = requiredPic;

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
        },
        async fetchWorks() {
            try {
                const response = await axios.get('/works/117');
                this.works = response.data;
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )

            }
        },
    },
    async created() {
        try {
            await this.fetchWorks();
        } catch (error) {
            console.log('error on load works');
        }
        this.works = this.makeArrWithRequiredPathImages(this.works);
        console.log(1, this.works);
    }

});