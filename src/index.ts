import { Engine, Loader, DisplayMode } from 'excalibur'
import { LevelOne } from './scenes/level-one/level-one'
import { Player } from './actors/player/player'
import { Resources } from './resources'
import { NPC } from './actors/npc/npc'
import { TiledResource } from '@excaliburjs/excalibur-tiled'

/**
 * Managed game class
 */
class Game extends Engine {

    private player: Player;
    private npc: NPC;

    private levelOne: LevelOne;

    constructor() {
        super({ displayMode: DisplayMode.FullScreen });
    }

    public start() {

        // Create new scene with a player
        this.levelOne = new LevelOne(this);
        this.player = new Player();
        this.npc = new NPC()
        this.levelOne.add(this.player);
        this.levelOne.add(this.npc)

        game.add('levelOne', this.levelOne);

        const loader = new Loader(Object.values(Resources));

        return super.start(loader);
    }
}

const game = new Game();
game.start().then(() => {
    game.goToScene('levelOne');
    
});
