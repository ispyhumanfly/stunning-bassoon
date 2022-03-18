import { Actor, Die, vec } from "excalibur";
import { Resources } from "../../../resources";

class Sally extends Actor {
    constructor() {
        super({
            pos: vec(200, 200),
            width: 100,
            height: 100,
        });
    }

    onInitialize() {
        this.graphics.add(Resources.Sword.toSprite());
        this.angularVelocity = 3;
        this.vel.y = 8;
    }
}

export default Sally;
