export const state = () => ({
    token: null
});
export const mutations = {
    add(state, token) {
        state.token = token;
    }
};
