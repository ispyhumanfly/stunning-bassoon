import { Engine, Scene } from 'excalibur';
import { Resources } from '../../resources';

/**
 * Managed scene
 */
export class LevelOne extends Scene {
  public onInitialize(engine: Engine) {

    engine.addTileMap(Resources.MageCity.getTileMap())
  }
  public onActivate() {}
  public onDeactivate() {}
}
