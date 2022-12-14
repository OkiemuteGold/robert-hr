// import axios from "axios";
// import $ from "jquery";
import homeStud from "@/api/homeStuds";
import galleryImages from "@/api/gallery";
import blogs from "@/api/blogs";
import teamMembers from "@/api/team";
import testimonials from "@/api/testimonials";

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

export const setActionLoading = ({ commit }, status) => {
    commit("SET_ACTION_LOADING", status);
};

export const setAlertModalStatus = ({ commit }, status) => {
    commit("SET_ALERT_MODAL_STATUS", status);
};

export const setAllStudItems = ({ commit }, payload) => {
    payload = homeStud;
    commit("ALL_STUD_ITEMS", payload);
};

export const setAllGalleryImages = ({ commit }) => {
    commit("ALL_GALLERY_IMAGES", galleryImages);
};

export const setAllBlogs = ({ commit }) => {
    commit("ALL_BLOGS", blogs);
};

export const setTeamMembers = ({ commit }) => {
    commit("TEAM_MEMBERS", teamMembers);
};

export const setTestimonials = ({ commit }) => {
    commit("TESTIMONIALS", testimonials);
};

export const setAllStallionHorses = ({ commit }, payload) => {
    let data;
    if (payload === "stallion") {
        data = stallionHorses;
    }

    if (payload === "mares") {
        data = maresHorses;
    }

    if (payload === "foals") {
        data = foalsHorses;
    }

    if (payload === "fillies") {
        data = filliesHorses;
    }

    // console.log(data, payload);
    commit("ALL_STALLION_HORSES", data);
};

// export const setAllMaresHorses = ({ commit }, payload) => {
//     payload = maresHorses;
//     commit("ALL_MARES_HORSES", payload);
// };

// export const setAllFoalsHorses = ({ commit }, payload) => {
//     payload = foalsHorses;
//     commit("ALL_FOALS_HORSES", payload);
// };

// export const setAllFilliesHorses = ({ commit }, payload) => {
//     payload = filliesHorses;
//     commit("ALL_FILLIES_HORSES", payload);
// };

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