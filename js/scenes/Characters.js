/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    var instance = null;

    class Characters extends kz.Scene {
        constructor () {
            super();

            if (!instance) {
                instance = this;
            }

            var bg = new PIXI.Sprite(PIXI.loader.resources.bg_characters.texture);
            instance.addChild(bg);

            /*
            kz.stage.children.sort(function(obj1, obj2) {
                return obj1.y - obj2.y;
            });
            */
            instance.addButtons();
            instance.time = new Date();
            instance.name = "Characters";

            kz.stage.addChild(instance);

            //Render the stage
            kz.stage.render();

            return instance;
        }

        addButtons () {
            var btn_play = new PIXI.Sprite(PIXI.loader.resources.btn_move.texture);
            var btn_left = new PIXI.Sprite(PIXI.loader.resources.btn_move.texture);
            var btn_right = new PIXI.Sprite(PIXI.loader.resources.btn_move.texture);

            //stage.on('mousedown', onTouchStart);
            //stage.on('touchstart', onTouchStart);
            btn_left.x = 90;
            btn_left.y = 220;
            btn_left.buttonMode = true;
            btn_left.interactive = true;
            btn_left.on('pointerdown', function(event) {
                event.target.parent.destroy();
            });

            btn_right.x = 480;
            btn_right.y = 220;
            btn_right.buttonMode = true;
            btn_right.interactive = true;
            btn_right.on('pointerdown', function(event) {
                //event.target.parent.destroy();
                console.log("options");
            });

            btn_play.x = 520;
            btn_play.y = 400;
            btn_play.buttonMode = true;
            btn_play.interactive = true;
            btn_play.on('pointerdown', function(event) {
                event.target.parent.destroy();
                kz.levels = new kz.Levels();
                //kz.stage.addChild(kz.levels);
            });

            instance.addChild(btn_left, btn_right, btn_play);
        }
    }

    _super.Characters = Characters;

}(this.kz));
