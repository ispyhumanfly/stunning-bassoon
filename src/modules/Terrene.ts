import { Engine, Loader } from "excalibur";
import OldManSam from "./actors/npc/OldManSam"
import { Resources } from "../resources";
import MainMenu from "./scenes/MainMenu";

class Terrene extends Engine {
    constructor() {
        super({width: 800, height: 600});
    }

    initialize() {
        
        const oldManSam = new OldManSam();
        this.add(oldManSam);

        const loader = new Loader([Resources.Sword]);
        this.start(loader).then(() => {
            this.addScene("mainmenu", new MainMenu())
            this.add(oldManSam)
        })
    }
}

export default Terrene
