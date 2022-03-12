import { Actor, Color, Engine, vec, Input, CollisionType  } from 'excalibur';
import { Resources } from '../../resources';

export class NPC extends Actor {
    constructor() {
        super({
            pos: vec(150, 150),
            width: 25,
            height: 25,
            color: new Color(255, 255, 255)
        })
        this.body.collisionType = CollisionType.Active
    }

    public onInitialize(engine: Engine) {
        // this.addDrawing(Resources.Sword)
        this.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveBy(400 * 1, 0, 100);
            repeatCtx.moveBy(-400 * 1, 0, 100);
        })
    }
}
