export default {
    namespaced: true,
    state: {
        reviews: []
    },
    mutations: {
        SET_REVIEWS: (state, reviews) => {
            state.reviews = reviews;
        },
        ADD_REVIEW: (state, newReview) => {
            state.reviews.unshift(newReview);
        },
        REMOVE_REVIEW: (state, deletedReviewId) => {
            state.reviews = state.reviews.filter(review => review.id !== deletedReviewId);
        },
        EDIT_REVIEW: (state, editedReview) => {
            state.reviews = state.reviews.map(review => review.id === editedReview.id ? editedReview : review);
        }
    },
    actions: {
        async addReview({commit}, review) {

            let formData = new FormData();

            formData.append("photo", review.photo);
            formData.append("author", review.author);
            formData.append("occ", review.occ);
            formData.append("text", review.text);
            try {
                const response = await this.$axios.post('/reviews', formData);
                commit('ADD_REVIEW', response.data);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )
            }
        },
        async fetchReviews({commit}) {
            try {
                const response = await this.$axios.get('/reviews/117');
                commit('SET_REVIEWS', response.data);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )
            }
        },
        async removeReview ({commit}, reviewId) {
            try {
                const response = await this.$axios.delete(`/reviews/${reviewId}`);
                commit('REMOVE_REVIEW', reviewId);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )
            }
        },
        async editReview({commit}, review) {
            let formData = new FormData();

            formData.append("photo", review.photo);
            formData.append("author", review.author);
            formData.append("occ", review.occ);
            formData.append("text", review.text);
            try {
                const response = await this.$axios.post(`/reviews/${review.id}`, formData);
                commit('EDIT_REVIEW', response.data.review);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )
            }
        }
    }
}