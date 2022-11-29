import * as THREE from "three";
import Experience from "../Experience";
import Environments from "./Environments";
import Room from "./Room.js";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("ready", () => {
            this.environments = new Environments();
            this.room = new Room();

            // console.log("룸 보여주기")
        });
    }

    resize() {}
    update() {
        if (this.room) {
            this.room.update();
        }
    }
}
