import {
    Engine,
    Scene,
    Loader,
    Label,
    Vector,
    FontUnit,
    Color,
    Font,
    vec,
    Polygon,
    Circle,
    SpriteSheet,
    ImageSource,
    TileMap,
    Tile,
    ExcaliburGraphicsContext2DCanvas,
} from "excalibur";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";

const tiledMapResource = new TiledMapResource("./Craydon.tmx", {
    startingLayerZIndex: -2,
});

export default class Craydon extends Scene {
    onInitialize(_engine: Engine): void {
        const jasperLabel = new Label({
            text: "Welcome to Craydon",
            pos: new Vector(500, 500),
            font: new Font({
                quality: 3,
                size: 30,
                unit: FontUnit.Px,
                family: "Termianl",
                color: Color.Rose,
            }),
        });

        this.add(jasperLabel);

        const loader = new Loader([tiledMapResource]);

        _engine.start(loader).then(() => {
            // console.log("Main menu loaded");
            tiledMapResource.addTiledMapToScene(this);
        });
    }
}
