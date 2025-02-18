import { person } from "../data/data.js";

export const home = (req, res) => {
    res.render("pages/home", {
        title: "Dinosaurs around the world",
        content: "Welcome to the world of dinosaurs",
    });
};
export const about = (req, res) => {
    res.render("pages/default", {
        title: "About us",
        content: "We are group of dinosaur enthusiasts",
        team: [
            "T-rex",
            "Velociraptor",
            "Stegosaurus",
            "<strong>Premium</strong> Diplodocus",
        ],
    });
};
export const contact = (req, res) => {
    res.render("pages/contact", {
        title: "Contact",
        content: "Contact us at 09 233 40 89",
        person,
    });
};
export const privacy = (req, res) => {
    res.render("pages/default", {
        title: "Privacy Policy",
        content: "Dinosaurs are protective of their privacy",
        team: false,
    });
};
