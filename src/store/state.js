const currentHorseRouteSaved = window.localStorage.getItem("currentRoute");

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

    allStudItems: null,
    allStallionHorses: null,
    currentHorse: null,
    currentHorseRoute: currentHorseRouteSaved ? JSON.parse(currentHorseRouteSaved) : null,
};
