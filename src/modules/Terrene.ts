import { Engine, GlobalCoordinates, Loader, vec } from "excalibur";
import OldManSam from "./actors/npc/OldManSam";
import WanderingMerchant from "./actors/npc/WanderingMerchant";
import { Resources } from "../resources";
import MainMenu from "./scenes/MainMenu";
import Sally from "./actors/npc/Sally";
import Goblin from "./actors/npc/Goblin";
import You from "./actors/You";

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

        // goblin.actions.easeTo(vec(100, 100), 1000);
        goblin.actions.follow(wanderingMerchant, 100);

        const loader = new Loader([Resources.Sword]);
        this.start(loader).then(() => {
            this.addScene("mainmenu", new MainMenu());
            this.add(oldManSam);
            this.add(wanderingMerchant);
            this.add(sally);
            this.add(goblin);
            this.add(you);
        });
    }
}

export default Terrene;
