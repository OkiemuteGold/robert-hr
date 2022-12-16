// const currentHorseIdSaved = window.localStorage.getItem("currentRoute");

export default {
    currentSitePage: null,

    bannerSettings: {
        title: null,
        description: null,
        buttonUrl: null,
        prevLinkText: null,
        currentLinkText: null,
        imageUrl: null,
    },

    actionProcessing: false,
    alertModalStatus: false,
    alertModalType: "",
    alertModalMessage: "",

    allStudItems: null,
    galleryImages: null,
    allBlogs: null,
    teamMembers: null,
    testimonials: null,

    allStallionHorses: null,
    // allMaresHorses: null,
    // allFoalsHorses: null,
    // allFilliesHorses: null,

    currentHorse: null,
    // currentHorseId: currentHorseIdSaved ? JSON.parse(currentHorseIdSaved) : null,
};
