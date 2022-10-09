import {
    DisplayMode,
    Engine,
    Loader,
    Vector,
    Label,
    FontUnit,
    CoordPlane,
    Color,
    Sound,
} from "excalibur";

import { TiledMapResource } from "@excaliburjs/plugin-tiled";

import Navosah, {
    Resources as NovosahResources,
} from "./characters/npc/WanderingMerchant/Navosah/Navosah";
import MainMenu from "./scenes/MainMenu";

import Sally, {
    Resources as SallyResources,
} from "./characters/npc/Sally/Sally";

import OldManSam, {
    Resources as OldManSamResources,
} from "./characters/npc/OldManSam/OldManSam";

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
        super({ displayMode: DisplayMode.FillScreen, maxFps: 45 });
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

        const sound = new Sound("./modules/characters/npc/Gianuah/Gianuah.mp3");

        this.start(
            new Loader([
                sound,
                tiledMap,
                NovosahResources.Image,
                OldManSamResources.Image,
                SallyResources.Image,
                GianuahResources.Image,
                GianuahResources.AsepriteResource,
                GianuahResources.Sound,
                YouResources.Image,
                YouResources.AsepriteResource,
                YouResources.Sound,
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

            sound.play(0.5);
            GianuahResources.Sound.play(1.0);
            YouResources.Sound.play();
        });
    }
}

export default Terrene;
