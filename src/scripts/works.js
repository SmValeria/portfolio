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
            currentIndex: 0,
            render: false
        }
    },
    computed: {
        currentWork(){
            return this.works[0]
        }
    },
    methods: {
        makeArrWithRequiredPathImagesAndIndex(data) {
            const baseUrl = axios.defaults.baseURL;
            return data.map((item, index) => {
                const requiredPic = `${baseUrl}/${item.photo}`;
                item.photo = requiredPic;
                item.index = index;

                return item;
            });
        },
        handleSlide(direction) {
            switch (direction) {
                case 'next':
                    const lastSlide = this.works.pop();
                    this.works.unshift(lastSlide);
                    break;
                case 'prev':
                    const firstSlide= this.works.shift();
                    this.works.push(firstSlide);
                    break;
            }
        },
        handleChangeIndex(index) {
            const arr = this.works.splice(0, index);
            this.works = [...this.works, ...arr];
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
        this.works = this.makeArrWithRequiredPathImagesAndIndex(this.works);
        this.render = true;
    }

});