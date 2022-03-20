import { DisplayMode, Engine, Loader, Sprite, vec } from "excalibur";
import OldManSam from "./characters/npc/OldManSam/OldManSam";
import WanderingMerchant from "./characters/npc/WanderingMerchant/WanderingMerchant";
import { Resources } from "../resources";
import MainMenu from "./scenes/MainMenu";
import Sally from "./characters/npc/Sally/Sally";
import Goblin from "./characters/npc/Goblin/Goblin";

import Gianuah, {
    Resources as GianuahResources,
} from "./characters/npc/Giaunah/Giaunah";

import You from "./characters/player/You/You";
import { AsepriteResource } from "@excaliburjs/plugin-aseprite";

class Terrene extends Engine {
    constructor() {
        super({ displayMode: DisplayMode.FillScreen });
    }

    initialize() {
        const you = new You();
        this.add(you);

        const oldManSam = new OldManSam();
        this.add(oldManSam);

        const sally = new Sally();
        this.add(sally);

        oldManSam.actions.follow(sally, 100);

        const wanderingMerchant = new WanderingMerchant();
        this.add(wanderingMerchant);

        const goblin = new Goblin();
        this.add(goblin);

        wanderingMerchant.actions
            .easeTo(vec(100, 100), 1000)
            .follow(sally, 100);

        const asepriteSpriteSheet = new AsepriteResource(
            "./characters/player/You/You.json"
        );

        const gianuah = new Gianuah();
        this.add(gianuah);

        this.start(
            new Loader([
                Resources.OldManSam,
                Resources.You,
                Resources.Sword,
                asepriteSpriteSheet,
                GianuahResources.Image,
                GianuahResources.AsepriteResource,
            ])
        ).then(() => {
            this.addScene("mainmenu", new MainMenu());
            this.add(oldManSam);
            this.add(wanderingMerchant);
            this.add(sally);
            this.add(goblin);
            this.add(gianuah);

            // const anim = Resources.YouSpriteSheet.getAnimation("Loop");
            // you.graphics.use(anim);

            // you.graphics.use(asepriteSpriteSheet.getAnimation("Loop") as any);

            // const spritesheet = Resources.YouSpriteSheet.getSpriteSheet();
            // const sprite = spritesheet?.getSprite(0, 1) as Sprite;

            // you.graphics.use(sprite);

            this.add(you);
        });
    }
}

export default Terrene;
