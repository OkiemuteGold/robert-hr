// import axios from "axios";
// import $ from "jquery";
import homeStud from "@/api/homeStuds";
import stallionHorses from "@/api/stallion";

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

export const setAllStallionHorses = ({ commit }, payload) => {
    payload = stallionHorses;
    commit("ALL_STALLION_HORSES", payload);
};

export const setCurrentHorse = ({ state, commit }, id) => {
    const currentHorse = state.allStallionHorses.filter(horse => {
        return horse.id === id;
    });

    commit("CURRENT_HORSE", currentHorse);
};

export const saveCurrentHorseRoute = ({ commit }, { routeId, historyCurrentName }) => {
    const currentHorseRoute = window.localStorage.setItem(
        "currentRoute",
        JSON.stringify({ routeId, historyCurrentName })
    );

    commit("CURRENT_HORSE_ROUTE", currentHorseRoute);
};