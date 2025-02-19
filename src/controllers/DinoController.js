import { dinosaurs } from "../data/data.js";
import { navItems } from "../data/data.js";
import { Myself } from "../data/data.js";


export const index = (req, res) => {
    res.render("dinosaurs/index", {
        title: "Dinosaurs",
        dinosaurs,
        navItems,
        Myself,
    });
};

export const detail = (req, res) => {
    const dino = dinosaurs.find((dino) => dino.slug === req.params.slug);
        
    res.render("dinosaurs/slug", {
            title: "Dinosaur details",
            dino,
            navItems,
            Myself,
        });
    
};