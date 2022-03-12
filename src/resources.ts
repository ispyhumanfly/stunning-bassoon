import { TextureLoader, TileMap } from 'excalibur';
import sword from './images/sword.png';
import { TiledResource, TiledMapFormat } from '@excaliburjs/excalibur-tiled'
/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */

const Resources = {
    Sword: sword,
    MageCity: new TiledResource("./assets/Terrene.json")
}

export { Resources }
