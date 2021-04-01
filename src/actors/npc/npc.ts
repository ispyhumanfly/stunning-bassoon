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
        this.body.collider.type = CollisionType.Active
    }

    public onInitialize(engine: Engine) {
        // this.addDrawing(Resources.Sword)
        this.actions.moveBy(400 * 1, 0, 100).moveBy(-400 * 1, 0, 100).repeatForever()
    }
}
