<template lang="pug">
    .review
        ReviewEdit(
        v-if="showForm"
        @deleteFormReview="handleDeleteForm"
        :mode="mode"
        :review="review"
        )
        ReviewList(
        @addNewReview="handleAddNewReview"
        @editReview="handleEditReview"
        :isFormShow="showForm"
        :editReviewId="review.id"
        )
</template>

<script>

    export default {
        name: "Reviews",
        components: {
            ReviewEdit: () => import("../ReviewEdit"),
            ReviewList: () => import("../ReviewList")
        },
        data () {
            return {
                showForm: false,
                mode: "add",
                review: {
                    id: null,
                    photo: "",
                    author: "",
                    occ: "",
                    text: ""
                },
            }
        },
        methods: {
            handleAddNewReview() {
                this.showForm=true;
                this.mode="add";
            },
            handleEditReview(editReview) {
                if(this.review.id) return;
                this.showForm=true;
                this.mode="edit";
                this.review = {...editReview}
            },
            handleDeleteForm() {
                this.review = {
                    id: null,
                    photo: "",
                    author: "",
                    occ: "",
                    text: ""
                };
                this.showForm = false;
            }
        }
    }
</script>

<style scoped>

</style>