<template lang="pug">
    ul.review__lists
        li.review__item
            AddItem(
            @click.native="$emit('addNewReview')"
            :disabled="isFormShow"
            ) Добавить
                br
                |отзыв
        ReviewItem(
        v-for="review in reviews"
        :key="review.id"
        :review="review"
        @editCurrentReview="editReview"
        :isFormShow="isFormShow"
        :class="{edit: isFormShow && editReviewId === review.id}"
        )
</template>

<script>

    import { mapActions, mapState } from "vuex";

    export default {
        name: "ReviewList",
        props: {
            isFormShow: Boolean,
            editReviewId: {
                validator: prop => typeof prop === 'number' || prop === null
            }
        },
        components: {
            ReviewItem: () => import("./ReviewItem"),
            AddItem: () => import("./AddItem"),
        },
        computed: {
            ...mapState('reviews', {
                reviews: state => state.reviews,
            }),
        },
        methods: {
            ...mapActions('reviews', ['fetchReviews']),
            editReview(editedReview) {
                this.$emit('editReview', editedReview)
            }
        },
        async created() {
            try {
                await this.fetchReviews();
            } catch (error) {
                console.log('error on load reviews');
            }
        }
    }
</script>

<style scoped>

</style>