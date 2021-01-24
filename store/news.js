export const state = () => ({
    allnews: [],
    isLoading: true,
})

export const mutations = {
    updatenews(state, news) {
        state.allnews = news;
        state.isLoading = false;
    }
}

export const actions = {
    async fetchnews({ commit, state }, page) {

        await this.$axios.$get(`http://node-hnapi.herokuapp.com/news?page=${page.page}`)
            .then((data) => {
                commit('updatenews', data)

            })
            .catch((error) => {

                console.log(error);
            })

    }
}