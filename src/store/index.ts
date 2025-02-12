import Vue from "vue";
import Vuex from "vuex";
import { navigationStore } from "@/store/modules/navigation-store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        navigation: navigationStore,
    },
});