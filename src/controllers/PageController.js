import { person, navItems, Myself, dinosaurs } from "../data/data.js";
import { index, detail } from "./DinoController.js";

export const home = (req, res) => {
    res.render("pages/home", {
        title: "Dinosaurs around the world",
        content: "Welcome to the world of dinosaurs",
        navItems,
        Myself,
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
        navItems,
        Myself,
        dinosaurs,
    });
};
export const contact = (req, res) => {
    res.render("pages/contact", {
        title: "Contact",
        content: "Contact us at 09 233 40 89",
        person,
        navItems,
        Myself,
        dinosaurs,
    });
};
export const privacy = (req, res) => {
    res.render("pages/default", {
        title: "Privacy Policy",
        content: "Dinosaurs are protective of their privacy",
        team: false,
        navItems,
        Myself,
        dinosaurs,
    });
};

export const dinosaursIndex = (req, res) => {
    res.render("dinosaurs/index", {
        title: "Dinosaurs",
        dinosaurs,
        navItems,
        Myself,
    });
};

export const dinosaursDetail = (req, res) => { 
    const dinosaur = dinosaurs.find((dino) => dino.slug === req.params.slug);
    if (dinosaur) {
        res.render("dinosaurs/slug", {
            title: dinosaur.name,
            dino: dinosaur,
            navItems,
            Myself,
        });
    } else {
        res.status(404).render("errors/404", {
            layout: "layouts/error",
            navItems,
            Myself,
        });
    }
};
