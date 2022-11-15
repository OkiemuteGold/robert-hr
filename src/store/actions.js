// import axios from "axios";
// import $ from "jquery";
import homeStud from "@/api/homeStuds";
import galleryImages from "@/api/gallery";
import stallionHorses from "@/api/stallion";
import maresHorses from "@/api/mares";
import foalsHorses from "@/api/foals";
import filliesHorses from "@/api/fillies";

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

export const setAllGalleryImages = ({ commit }) => {
    commit("ALL_GALLERY_IMAGES", galleryImages);
};

export const setAllStallionHorses = ({ commit }, payload) => {
    payload = stallionHorses;
    commit("ALL_STALLION_HORSES", payload);
};

export const setAllMaresHorses = ({ commit }, payload) => {
    payload = maresHorses;
    commit("ALL_MARES_HORSES", payload);
};

export const setAllFoalsHorses = ({ commit }, payload) => {
    payload = foalsHorses;
    commit("ALL_FOALS_HORSES", payload);
};

export const setAllFilliesHorses = ({ commit }, payload) => {
    payload = filliesHorses;
    commit("ALL_FILLIES_HORSES", payload);
};

export const setCurrentHorse = ({ state, commit }, id) => {
    const currentHorse = state.allStallionHorses.filter(horse => {
        return horse.id === id;
    });

    commit("CURRENT_HORSE", currentHorse[0]);
};

// export const saveCurrentHorseId = ({ commit }, routeId) => {
//     const currentHorseId = window.localStorage.setItem(
//         "currentRoute",
//         JSON.stringify(routeId)
//     );

//     commit("CURRENT_HORSE_ID", currentHorseId);
// };