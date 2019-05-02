export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        REMOVE_USER: (state) => {
            state.user = {}
        }
    },
    getters: {
        userIsLogged: state => {
            const userObj = state.user;
            const userObjectIsEmpty = Object.keys(userObj).length === 0
                && userObj.constructor === Object;

            return userObjectIsEmpty === false;
        }
    },
    actions: {
        async login({commit}, userData) {
            try {
                const response = await this.$axios.post('/login', userData);
                commit ('SET_USER', response.data);
                const token = response.data.token;
                localStorage.setItem('token', token);
                this.$axios.defaults.headers['Authorization'] = `Bearer${token}`;
                return response
            } catch (error) {
                throw new Error (
                    error.response.data.error || error.response.data.message
                )
            }
        },
        async logout({commit}) {
            try {
                const response = await this.$axios.post('/logout');
                commit ('REMOVE_USER');
                localStorage.removeItem('token');
                this.$axios.defaults.headers['Authorization'] = '';
                return response
            } catch (error) {
                throw new Error (
                    error.response.data.error || error.response.data.message
                )
            }
        }
    }
}