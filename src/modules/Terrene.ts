import {
    DisplayMode,
    Engine,
    Loader,
    Vector,
    Label,
    FontUnit,
    CoordPlane,
    Color,
} from "excalibur";

import { TiledMapResource } from "@excaliburjs/plugin-tiled";

import OldManSam from "./characters/npc/OldManSam/OldManSam";
import Navosah from "./characters/npc/WanderingMerchant/Navosah/Navosah";
import { Resources } from "../resources";
import MainMenu from "./scenes/MainMenu";
import Sally from "./characters/npc/Sally/Sally";

import Horus, {
    Resources as HorusResources,
} from "./characters/npc/Goblin/Horus/Horus";

import Gianuah, {
    Resources as GianuahResources,
} from "./characters/npc/Giaunah/Giaunah";

import You, { Resources as YouResources } from "./characters/player/You/You";

const tiledMap = new TiledMapResource("./scenes/MoonGraas/MoonGraas.tmx");

class Terrene extends Engine {
    constructor() {
        super({ displayMode: DisplayMode.FillScreen });
    }

    initialize() {
        const scoreLabel = new Label({
            text: "Score: " + 10,
            pos: new Vector(20, 30),
        });
        scoreLabel.font.quality = 3;
        scoreLabel.font.size = 30;
        scoreLabel.font.unit = FontUnit.Px;
        scoreLabel.font.family = "Terminal";
        scoreLabel.transform.coordPlane = CoordPlane.Screen;
        scoreLabel.color = Color.Cyan;
        scoreLabel.on("preupdate", function (this: Label, evt) {
            this.text = "Score: " + 12;
        });

        this.add(scoreLabel);

        const you = new You();
        this.add(you);

        const oldManSam = new OldManSam();
        this.add(oldManSam);

        const sally = new Sally();
        this.add(sally);

        oldManSam.actions.follow(sally, 100);

        const navosah = new Navosah();
        this.add(navosah);

        const horus1 = new Horus();
        const horus2 = new Horus();

        this.add(horus1);
        this.add(horus2);

        navosah.actions.easeTo(new Vector(100, 100), 1000).follow(sally, 100);

        const gianuah = new Gianuah();
        this.add(gianuah);

        this.start(
            new Loader([
                tiledMap,
                Resources.OldManSam,
                Resources.Sally,
                Resources.Sword,
                GianuahResources.Image,
                GianuahResources.AsepriteResource,
                YouResources.Image,
                YouResources.AsepriteResource,
                HorusResources.Image,
                HorusResources.AsepriteResource,
            ])
        ).then(() => {
            this.addScene("mainmenu", new MainMenu());
            tiledMap.addTiledMapToScene(this.currentScene);
            this.add(oldManSam);
            this.add(navosah);
            this.add(sally);

            this.add(horus1);
            this.add(horus2);

            this.add(gianuah);

            this.add(you);
        });
    }
}

export default Terrene;
