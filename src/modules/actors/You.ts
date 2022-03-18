import { Engine, Actor, Die, Input, vec } from "excalibur";
import { Resources } from "../../resources";

class You extends Actor {
    constructor() {
        super({
            pos: vec(300, 300),
            width: 100,
            height: 100
        });
    }

    onInitialize(engine: Engine) {
        this.graphics.add(Resources.Sword.toSprite());

        engine.input.keyboard.on("hold", (press) => {

            switch (press.key) {
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

export default You
