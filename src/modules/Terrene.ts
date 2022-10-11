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
    Font,
    Transform,
    Input,
} from "excalibur";

import { TiledMapResource } from "@excaliburjs/plugin-tiled";

// import tiledMap from "./cities/Craydon/Craydon.tmx";

const tiledMapResource = new TiledMapResource("./cities/Craydon/Craydon.tmx");

import Navosah, {
    Resources as NovosahResources,
} from "./characters/npc/WanderingMerchant/Navosah/Navosah";
// import MainMenu from "./scenes/MainMenu";
import Craydon from "./cities/Craydon/Craydon";

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

class Terrene extends Engine {
    constructor() {
        super({
            displayMode: DisplayMode.FillScreen,
            maxFps: 45,
            pointerScope: Input.PointerScope.Canvas,
            antialiasing: false,
        });
    }

    initialize() {
        this.start(
            new Loader([
                tiledMapResource,
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
            this.addScene("craydon", new Craydon());
            tiledMapResource.addTiledMapToScene(this.currentScene);
            // this.goToScene("craydon");

            let score = 10;
            const scoreLabel = new Label({
                text: "Score: " + score,
                pos: new Vector(20, 30),
                font: new Font({
                    quality: 3,
                    size: 30,
                    unit: FontUnit.Px,
                    family: "Termianl",
                    color: Color.Cyan,
                }),
            });

            const manaLabel = new Label({
                text: "Mana: " + 100,
                pos: new Vector(100, 50),
            });

            this.add(scoreLabel);
            this.add(manaLabel);

            const you = new You();
            this.add(you);

            const oldManSam = new OldManSam();
            this.add(oldManSam);

            const sally = new Sally();
            this.add(sally);

            sally.actions.repeatForever((action) => {
                action.meet(you, 100).die();
            });

            oldManSam.actions.follow(sally, 100);

            const navosah = new Navosah();
            this.add(navosah);

            navosah.actions.follow(sally, 500);

            const horus1 = new Horus();
            const horus2 = new Horus();

            this.add(horus1);
            this.add(horus2);

            const gianuah = new Gianuah();
            this.add(gianuah);

            // this.add(oldManSam);
            // this.add(navosah);
            // this.add(sally);
            // this.add(horus1);
            // this.add(horus2);
            // this.add(gianuah);
            // this.add(you);
            // if (YouResources.Sound.isLoaded()) {
            //     YouResources.Sound.play(0.5);
            // }
        });
    }
}

export default Terrene;
