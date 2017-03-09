/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    var instance = null;

    class Main extends kz.Scene {
        constructor () {
            super();

            if (!instance) {
                instance = this;
            }

            var bg = new PIXI.Sprite(PIXI.loader.resources.bg.texture);
            instance.addChild(bg);

            /*
            kz.stage.children.sort(function(obj1, obj2) {
                return obj1.y - obj2.y;
            });
            */
            instance.addButtons();
            instance.time = new Date();
            instance.name = "Main";

            kz.stage.addChild(instance);

            //Render the stage
            kz.stage.render();

            return instance;
        }

        addButtons () {
            var btn_play = new PIXI.Sprite(PIXI.loader.resources.btn_play.texture);
            var btn_options = new PIXI.Sprite(PIXI.loader.resources.btn_options.texture);
            var btn_credits = new PIXI.Sprite(PIXI.loader.resources.btn_credits.texture);

            //stage.on('mousedown', onTouchStart);
            //stage.on('touchstart', onTouchStart);
            btn_play.x = 20;
            btn_play.y = 20;
            btn_play.buttonMode = true;
            btn_play.interactive = true;
            btn_play.on('pointerdown', function(event) {
                event.target.parent.destroy();
                //kz.characters = new kz.Characters();
                //kz.stage.addChild(kz.characters);
                kz.game = new kz.Game();
                kz.stage.addChild(kz.game);
            });

            btn_options.x = 20;
            btn_options.y = 80;
            btn_options.buttonMode = true;
            btn_options.interactive = true;
            btn_options.on('pointerdown', function(event) {
                //event.target.parent.destroy();
                console.log("options");
            });

            btn_credits.x = 20;
            btn_credits.y = 120;
            btn_credits.buttonMode = true;
            btn_credits.interactive = true;
            btn_credits.on('pointerdown', function(event) {
                //event.target.parent.destroy();
                console.log("credits");
            });

            instance.addChild(btn_play, btn_options, btn_credits);
        }
    }

    _super.Main = Main;

}(this.kz));
