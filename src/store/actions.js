// import axios from "axios";
// import $ from "jquery";
import homeStud from "@/api/homeStuds";

export const setCurrentPage = ({ commit }, payload) => {
    commit("CURRENT_SITE_PAGE", payload);
};

export const setBannerSettings = ({ commit }, payload) => {
    commit("BANNER_SETTINGS", payload);
};

export const setAllStudItems = ({ commit }, payload) => {
    payload = homeStud;
    commit("ALL_STUD_ITEMS", payload);
};