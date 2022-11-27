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

export const getAllGalleryImages = (state) => {
    return state.galleryImages;
};

export const getAllBlogs = (state) => {
    return state.allBlogs;
};

export const getAllStallionHorses = (state) => {
    return state.allStallionHorses;
};

// export const getAllMaresHorses = (state) => {
//     return state.allMaresHorses;
// };

// export const getAllFoalsHorses = (state) => {
//     return state.allFoalsHorses;
// };

// export const getAllFilliesHorses = (state) => {
//     return state.allFilliesHorses;
// };

export const getCurrentHorse = (state) => {
    return state.currentHorse;
};