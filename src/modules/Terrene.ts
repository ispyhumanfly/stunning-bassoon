import { DisplayMode, Engine, Loader, vec } from "excalibur";
import OldManSam from "./characters/npc/OldManSam/OldManSam";
import Navosah from "./characters/npc/WanderingMerchant/Navosah/Navosah";
import { Resources } from "../resources";
import MainMenu from "./scenes/MainMenu";
import Sally from "./characters/npc/Sally/Sally";
import Goblin from "./characters/npc/Goblin/Goblin";

import Gianuah, {
    Resources as GianuahResources,
} from "./characters/npc/Giaunah/Giaunah";

import You, { Resources as YouResources } from "./characters/player/You/You";

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

        const navosah = new Navosah();
        this.add(navosah);

        const goblin = new Goblin();
        this.add(goblin);

        navosah.actions.easeTo(vec(100, 100), 1000).follow(sally, 100);

        const gianuah = new Gianuah();
        this.add(gianuah);

        this.start(
            new Loader([
                Resources.OldManSam,
                Resources.Sally,
                Resources.Sword,
                GianuahResources.Image,
                GianuahResources.AsepriteResource,
                YouResources.Image,
                YouResources.AsepriteResource,
            ])
        ).then(() => {
            this.addScene("mainmenu", new MainMenu());
            this.add(oldManSam);
            this.add(navosah);
            this.add(sally);
            this.add(goblin);
            this.add(gianuah);

            this.add(you);
        });
    }
}

export default Terrene;
