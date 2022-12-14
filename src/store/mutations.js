export const CURRENT_SITE_PAGE = (state, payload) => {
    state.currentSitePage = payload;
};

export const BANNER_SETTINGS = (state, payload) => {
    state.bannerSettings = {
        title: payload.title,
        description: payload.description,
        prevLinkText: payload.prevLinkText,
        currentLinkText: payload.currentLinkText,
        buttonUrl: payload.buttonUrl,
        imageUrl: payload.imageUrl,
    };
};

export const SET_ACTION_LOADING = (state, payload) => {
    setTimeout(() => {
        state.actionProcessing = payload;
    }, 200);
};

export const SET_ALERT_MODAL_STATUS = (state, payload) => {
    state.alertModalStatus = payload.status;
    state.alertModalType = payload.type;
    state.alertModalMessage = payload.message;
};

export const ALL_STUD_ITEMS = (state, payload) => {
    state.allStudItems = payload;
};

export const ALL_GALLERY_IMAGES = (state, payload) => {
    state.galleryImages = payload;
};

export const ALL_BLOGS = (state, payload) => {
    state.allBlogs = payload;
};

export const TEAM_MEMBERS = (state, payload) => {
    state.teamMembers = payload;
};

export const TESTIMONIALS = (state, payload) => {
    state.testimonials = payload;
};

export const ALL_STALLION_HORSES = (state, payload) => {
    state.allStallionHorses = payload;
};

// export const ALL_MARES_HORSES = (state, payload) => {
//     state.allMaresHorses = payload;
// };

// export const ALL_FOALS_HORSES = (state, payload) => {
//     state.allFoalsHorses = payload;
// };

// export const ALL_FILLIES_HORSES = (state, payload) => {
//     state.allFilliesHorses = payload;
// };

export const CURRENT_HORSE = (state, payload) => {
    state.currentHorse = payload;
};

// export const CURRENT_HORSE_ID = (state, payload) => {
//     state.currentHorseId = payload;
// };