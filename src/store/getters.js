// import router from "../router";

// export const checkCurrentRoute = () => {
//     return router.history.current.meta.requiresAuth;
// };

export const currentSitePage = (state) => {
    return state.currentSitePage;
};

export const bannerSettings = (state) => {
    return state.bannerSettings;
};

export const getAllStudItems = (state) => {
    return state.allStudItems;
};

export const getAllStallionHorses = (state) => {
    return state.allStudItems;
};

export const getCurrentHorse = (state) => {
    return state.currentHorse;
};