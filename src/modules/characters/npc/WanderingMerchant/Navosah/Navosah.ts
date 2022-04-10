import { Actor, Die, vec } from "excalibur";
import { Resources } from "../../../../../resources";
import WanderingMerchant from "../WanderingMerchant";

class Novosah extends WanderingMerchant {
    constructor() {
        super({
            pos: vec(100, 100),
            width: 100,
            height: 100,
        });
    }

    onInitialize() {
        this.graphics.add(Resources.Sword.toSprite());
        this.actions.blink(500, 190);
        this.vel.x = 8;
    }
}

export default Novosah;
