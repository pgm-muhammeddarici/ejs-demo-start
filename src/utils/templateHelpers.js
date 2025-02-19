const helpers = {
    uppie: function (inp) {
        const upper = inp.toUpperCase();
        return upper;
    },
    highlight: function (inp) {
        return `<span style="background-color: yellow;">
            ${inp}
            </span>`;
    },
    emojify: function (inp, className) {
        return `<span class="${className}">🦕 ${inp}</span>"`;
    },
    button: function (url) {
        return `<a href="/dinosaurs">To all dinosaurs</a>`;
    },
};

export default helpers;