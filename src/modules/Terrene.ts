import { Engine, GlobalCoordinates, Loader, vec } from "excalibur";
import OldManSam from "./characters/npc/OldManSam/OldManSam";
import WanderingMerchant from "./characters/npc/WanderingMerchant/WanderingMerchant";
import { Resources } from "../resources";
import MainMenu from "./scenes/MainMenu";
import Sally from "./characters/npc/Sally/Sally";
import Goblin from "./characters/npc/Goblin/Goblin";
import You from "./characters/player/You/You";
import { AsepriteResource } from "@excaliburjs/plugin-aseprite";

const asepriteSpriteSheet = new AsepriteResource(
    "./actors/player/You/You.json"
);

class Terrene extends Engine {
    constructor() {
        super({ width: 800, height: 600 });
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

        goblin.actions.easeTo(vec(100, 100), 1000).follow(sally, 100);

        const loader = new Loader([
            Resources.OldManSam,
            Resources.You,
            Resources.Sword,
            asepriteSpriteSheet,
        ]);
        this.start(loader).then(() => {
            this.addScene("mainmenu", new MainMenu());
            this.add(oldManSam);
            this.add(wanderingMerchant);
            this.add(sally);
            this.add(goblin);

            const anim = asepriteSpriteSheet.getAnimation("Loop");
            you.graphics.use(anim);

            this.add(you);
        });
    }
}

export default Terrene;
