import { Actor, Die, vec } from "excalibur";
import { Resources } from "../../../resources";

class Goblin extends Actor {
    constructor() {
        super({
            pos: vec(245, 245),
            width: 100,
            height: 100
        });
    }

    onInitialize() {
        this.graphics.add(Resources.Sword.toSprite());

    }
}

export default Goblin
