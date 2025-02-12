import { Module } from "vuex";

export const navigationStore: Module<any, any> = {
    namespaced: true,
    state: {
        dynamicSearchQuery: "{{searchPlaceholder}}",
    },
    mutations: {
        setDynamicSearchQuery(state: any, item: string) {
            state.dynamicSearchQuery = item;
        },
    },
    actions: {
        async setDynamicSearchQuery(context: any, value: string) {
            await context.commit("setDynamicSearchQuery", value);
        },
    },
    getters: {
        dynamicSearchQuery(state) {
            return state.dynamicSearchQuery;
        },
    }
}