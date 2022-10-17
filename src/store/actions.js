// import axios from "axios";
// import $ from "jquery";

export const setCurrentPage = ({ commit }, payload) => {
    commit("CURRENT_SITE_PAGE", payload);
};

export const setBannerSettings = ({ commit }, payload) => {
    commit("BANNER_SETTINGS", payload);
};
