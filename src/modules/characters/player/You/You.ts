import { Engine, Actor, Die, Input, vec, ImageSource, Sound } from "excalibur";
import { AsepriteResource } from "@excaliburjs/plugin-aseprite";
import YouImage from "./You.png";
export default class You extends Actor {
    constructor() {
        super({
            pos: vec(300, 300),
            width: 128,
            height: 128,
            scale: vec(4, 4),
        });
    }

    onInitialize(engine: Engine) {
        this.graphics.add(Resources.Image.toSprite());

        const sound = new Sound("./modules/characters/player/You/You.mp3");
        sound.loop;
        sound.play(1.0);

        engine.input.keyboard.on("hold", (press) => {
            switch (press.key) {
                case Input.Keys.Up:
                case Input.Keys.W:
                    this.pos.y = this.pos.y - 10;
                    break;
                case Input.Keys.Down:
                case Input.Keys.S:
                    this.pos.y = this.pos.y + 10;
                    break;
                case Input.Keys.Left:
                case Input.Keys.A:
                    this.pos.x = this.pos.x - 10;
                    sound.loop = true;
                    sound.play(1.0);

                    break;
                case Input.Keys.Right:
                case Input.Keys.D:
                    this.pos.x = this.pos.x + 10;
                    break;
            }
        });
    }
}

const Resources = {
    Image: new ImageSource(YouImage),
    AsepriteResource: new AsepriteResource(
        "./modules/characters/player/You/You.json"
    ),
    Sound: new Sound("./modules/characters/player/You/You.mp3"),
};

export { Resources };
