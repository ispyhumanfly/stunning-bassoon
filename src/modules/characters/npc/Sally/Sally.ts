import { Actor, vec, ImageSource, Timer } from "excalibur";
import SallyImage from "./Sally.png";
export default class Sally extends Actor {
    constructor() {
        super({
            pos: vec(500, 500),
            width: 10,
            height: 10,
            scale: vec(4, 4),
        });
    }

    onInitialize() {
        this.graphics.add(Resources.Image.toSprite());
        this.angularVelocity = 3;
        this.vel.y = 5;

        this.on("collisionstart", () => {
            this.angularVelocity = 5;
            this.vel.y = 25;
        });
        this.on("collisionend", () => {
            this.angularVelocity = 3;
            this.vel.y = 5;
        });
    }
}

const Resources = {
    Image: new ImageSource(SallyImage),
};

export { Resources };
