import { Actor, Die, vec } from "excalibur";
import { Resources } from "../../../resources";

class WanderingMerchant extends Actor {
    constructor() {
        super({
            pos: vec(100, 100),
            width: 100,
            height: 100
        });
    }

    onInitialize() {
        this.graphics.add(Resources.Sword.toSprite());

    }
}

export default WanderingMerchant
