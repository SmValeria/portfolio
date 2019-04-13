export default {
    namespaced: true,
    state: {
        categories: [],
    },
    mutations: {
        SET_CATEGORIES: (state, categories) => {
            state.categories = categories
        },
        ADD_CATEGORY: (state, category) => {
            state.categories.unshift(category);
        },
        REMOVE_CATEGORY: (state, deletedCategoryId) => {
            state.categories = state.categories.filter(category => category.id !== deletedCategoryId);
        },
        EDIT_CATEGORY: (state, editedCategory) => {
            state.categories = state.categories.map(category => {
                if(category.id === editedCategory.id) {
                    category.category = editedCategory.category;
                }
                return category
            });
        }
    },
    actions: {
        async addNewSkillGroup({commit}, groupTitle) {
            try {
                const response = await this.$axios.post('/categories', {
                    title: groupTitle
                });
                commit('ADD_CATEGORY', response.data);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )

            }
        },
        async fetchCategories({commit}) {
            try {
                const response = await this.$axios.get('/categories/117');
                commit('SET_CATEGORIES', response.data);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )

            }
        },
        async removeCategory ({commit}, categoryId) {
            try {
                const response = await this.$axios.delete(`/categories/${categoryId}`);
                commit('REMOVE_CATEGORY', categoryId);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )

            }
        },
        async editCategory ({commit}, category) {
            try {
                const response = await this.$axios.post(`/categories/${category.id}`, {
                    title: `${category.category}`
                });
                commit('EDIT_CATEGORY', category);
                console.log(response.data);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )

            }
        }

    }
}