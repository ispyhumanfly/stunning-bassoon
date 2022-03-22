import { ImageSource } from "excalibur";
import sword from "./assets/sword.png"; // for parcelv2 this is configured in the .parcelrc
import OldManSam from "./modules/characters/npc/OldManSam/OldManSam.png";

import Sally from "./modules/characters/npc/Sally/Sally.png";

const Resources = {
    Sword: new ImageSource(sword),
    OldManSam: new ImageSource(OldManSam),
    Sally: new ImageSource(Sally)
};

export { Resources };
