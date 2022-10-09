import { Actor, vec, ImageSource } from "excalibur";
import OldManSamImage from "./OldManSam.png";

export default class OldManSam extends Actor {
    constructor() {
        super({
            pos: vec(150, 150),
            width: 200,
            height: 200,
            scale: vec(4, 4),
        });
    }

    onInitialize() {
        this.graphics.add(Resources.Image.toSprite());
        // this.vel.y = 8;
    }
}

const Resources = {
    Image: new ImageSource(OldManSamImage),
};

export { Resources };
