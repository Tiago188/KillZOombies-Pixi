/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    var instance = null;

    class Splash extends kz.Scene {
        constructor () {
            super();

            if (!instance) {
                instance = this;
            }

            var bg = new PIXI.Sprite(PIXI.loader.resources.bg_splash.texture);
            this.addChild(bg);

            //kz.stage.hitArea = new PIXI.Rectangle(0, 0, 1000, 1000);
            //this.containsPoint = true;
            bg.buttonMode = true;
            bg.interactive = true;
            bg.on('pointerdown', function(event) {
                event.target.parent.destroy();
                kz.main = new kz.Main();
            });


            kz.stage.addChild(this);

            //Render the stage
            kz.stage.render();

            //return instance;
        }
    }

    _super.Splash = Splash;

}(this.kz));
