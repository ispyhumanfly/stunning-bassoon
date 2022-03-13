import { Scene, Engine } from "excalibur"

export class MainMenu extends Scene {
    private _loaded: boolean = false
  
    /**
     * Start-up logic, called once
     */
    public onInitialize(engine: Engine) {
      // load scene-specific assets
      engine.start().then(() => {
        this._loaded = true
      })
    }
}