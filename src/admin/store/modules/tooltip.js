export default {
    namespaced: true,
    state: {
        show: false,
        text: "",
        type: ""
    },
    mutations: {
        SET_SHOW: (state, boolean) => {
            state.show = boolean;
        },
        SET_TEXT: (state, text) => {
            state.text = text;
        },
        SET_TYPE: (state, type) => {
            state.type = type
        }
    },
    actions: {
        showTooltip ({commit}, payload) {
            commit('SET_SHOW', true);
            commit('SET_TEXT', payload.text);
            commit('SET_TYPE', payload.type);
        },
        closeTooltip ({commit}){
            commit('SET_SHOW', false);
            commit('SET_TEXT', "");
            commit('SET_TYPE', "");
        },
        handleTooltip({commit, dispatch},payload) {
            dispatch('showTooltip', payload);
            setTimeout(()=> {
                dispatch('closeTooltip')
            }, 1500)
        }
    }
}