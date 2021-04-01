import { Actor, Color, Engine, vec, Input, CollisionType  } from 'excalibur';
import { Resources } from '../../resources';

export class Player extends Actor {
    constructor() {
        super({
            pos: vec(150, 150),
            width: 25,
            height: 25,
            color: new Color(255, 255, 255)
        });

        this.body.collider.type = CollisionType.Active;
    }

    public onInitialize(engine: Engine) {
        this.addDrawing(Resources.Sword)

        // this.actions.moveBy(400 * 1, 0, 100).moveBy(-400 * 1, 0, 100)
        
        engine.input.pointers.primary.on("move", (evt) => {
            this.pos.x = evt.worldPos.x
            this.pos.y = evt.worldPos.y
        })
        

        engine.input.keyboard.on("hold",(press) => {

            switch(press.key) {
                case Input.Keys.Up:
                case Input.Keys.W:
                    this.pos.y = this.pos.y - 10
                    break
                case Input.Keys.Down:
                case Input.Keys.S:
                    this.pos.y = this.pos.y + 10
                    break
                case Input.Keys.Left:
                case Input.Keys.A:
                    this.pos.x = this.pos.x - 10
                    break
                case Input.Keys.Right:
                case Input.Keys.D:
                    this.pos.x = this.pos.x + 10
                    break
            }
        })

    }
}
