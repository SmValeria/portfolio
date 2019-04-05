import Vue from 'vue'
import Flickity from 'vue-flickity';

new Vue({
    el: "#reviews-component",
    template: "#reviews-container",
    components: {
        Flickity
    },

    data() {
        return {
            reviews: [],
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                groupCells: true,
                resize: true,
            }
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        },
        makeArrWithRequiredPathImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = 'url( \"' + requiredPic + '\")';
                return item;
            });
        },
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrWithRequiredPathImages(data);
    }
});