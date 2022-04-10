import { Actor, vec } from "excalibur";
import { Resources } from "../../../../resources";

class Sally extends Actor {
    constructor() {
        super({
            pos: vec(500, 500),
            width: 10,
            height: 10,
            scale: vec(4, 4),
        });
    }

    onInitialize() {
        this.graphics.add(Resources.Sally.toSprite());
        this.angularVelocity = 3;
        this.vel.y = 8;
    }
}

export default Sally;
