import { Engine, Scene } from "excalibur";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";

const tiledMap = new TiledMapResource("./scenes/MoonGraas/MoonGraas.tmx");

class MainMenu extends Scene {
    onInitialize(_engine: Engine): void {
        _engine.start().then(() => {
            tiledMap.addTiledMapToScene(this);
        });
    }

    onDeactivate(_oldScene: Scene, _newScene: Scene): void {}
}

export default MainMenu;
