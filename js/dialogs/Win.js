/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    var instance = null;

    class Pause extends kz.Dialog {
        constructor () {
            super();

            if (!instance) {
                instance = this;
            }

            var bg = new PIXI.Sprite(PIXI.loader.resources.bg.texture);
            instance.addChild(bg);

            instance.addButtons();

            kz.stage.addChild(instance);

            //Render the stage
            kz.stage.render();

            return instance;
        }

        addButtons () {
            var btn_play = new PIXI.Sprite(PIXI.loader.resources.btn_play.texture);
            var btn_options = new PIXI.Sprite(PIXI.loader.resources.btn_options.texture);
            var btn_main = new PIXI.Sprite(PIXI.loader.resources.btn_main.texture);

            //stage.on('mousedown', onTouchStart);
            //stage.on('touchstart', onTouchStart);
            btn_play.x = 20;
            btn_play.y = 20;
            btn_play.buttonMode = true;
            btn_play.interactive = true;
            btn_play.on('pointerdown', function(event) {
                event.target.parent.destroy();

                if (!PIXI.ticker.shared.started) {
                    //kz.stage.removeChild(kz.pause);
                    PIXI.ticker.shared.start();
                }
            });

            btn_options.x = 20;
            btn_options.y = 80;
            btn_options.buttonMode = true;
            btn_options.interactive = true;
            btn_options.on('pointerdown', function(event) {
                //event.target.parent.destroy();
                console.log("options");
            });

            btn_main.x = 20;
            btn_main.y = 120;
            btn_main.buttonMode = true;
            btn_main.interactive = true;
            btn_main.on('pointerdown', function(event) {
                event.target.parent.destroy();
                kz.stage.removeChild(kz.game);

                kz.main = new kz.Main();
            });

            this.addChild(btn_play, btn_options, btn_main);
        }
    }

    _super.Pause = Pause;

}(this.kz));
