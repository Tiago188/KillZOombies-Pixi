/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    var instance = null;

    class HUD extends PIXI.Container {
        constructor () {
            super();

            kz.pad = {
                axis: {
                    x: 0,
                    y: 0
                }
            };

            if (!instance) {
                instance = this;
            } else {
                return instance;
            }

            this.time = new Date();

            //HUD
            var btn_left = new PIXI.Sprite(PIXI.loader.resources.btn_move.texture);
            var btn_right = new PIXI.Sprite(PIXI.loader.resources.btn_move.texture);
            var btn_pause = new PIXI.Sprite(PIXI.loader.resources.btn_pause.texture);
            var btn_shoot = new PIXI.Sprite(PIXI.loader.resources.btn_shoot.texture);

            //stage.on('mousedown', onTouchStart);
            //stage.on('touchstart', onTouchStart);
            btn_left.x = 20;
            btn_left.y = 500;
            btn_left.buttonMode = true;
            btn_left.interactive = true;
            btn_left.on('pointerdown', function() {
                kz.pad.axis.x = -1;
                kz.pad.axis.time = kz.game.time;
            });
            btn_left.on('pointerup', keyAxisUp);
            btn_left.on('pointerupoutside', keyAxisUp);

            btn_right.x = 120;
            btn_right.y = 500;
            btn_right.buttonMode = true;
            btn_right.interactive = true;
            btn_right.on('pointerdown', function() {
                kz.pad.axis.x = 1;
                kz.pad.axis.time = kz.game.time;
            });
            btn_right.on('pointerup', keyAxisUp);
            btn_right.on('pointerupoutside', keyAxisUp);

            function keyAxisUp () {
                kz.pad.axis.x = 0;
                kz.pad.axis.time = kz.game.time;
            }

            btn_pause.x = 520;
            btn_pause.y = 20;
            btn_pause.buttonMode = true;
            btn_pause.interactive = true;
            btn_pause.on('pointerdown', function() {
                //kz.game.destroy();
                //kz.stage.addChild(new kz.Main());
                //PIXI.ticker.stop();
                if (PIXI.ticker.shared.started) {
                    PIXI.ticker.shared.stop();
                    kz.pause = new kz.Pause();
                }
            });

            btn_shoot.x = 520;
            btn_shoot.y = 500;
            btn_shoot.buttonMode = true;
            btn_shoot.interactive = true;
            btn_shoot.on('pointerdown', function() {
                kz.pad.fire = 1;
            });
            btn_right.on('pointerup', function() {
                kz.pad.fire = 0;
            });

            this.addChild(btn_left, btn_right, btn_pause, btn_shoot);

            return instance;
        }

        /*
        removeChild () {
            console.log("REMOVED");
        }
        */
    }

    _super.HUD = HUD;

}(this.kz));

// button events.
        //.on('pointerdown', onButtonDown)
        //.on('pointerup', onButtonUp)
        //.on('pointerupoutside', onButtonUp)
        //.on('pointerover', onButtonOver)
        //.on('pointerout', onButtonOut);

        // Use mouse-only events
        // .on('mousedown', onButtonDown)
        // .on('mouseup', onButtonUp)
        // .on('mouseupoutside', onButtonUp)
        // .on('mouseover', onButtonOver)
        // .on('mouseout', onButtonOut)

        // Use touch-only events
        // .on('touchstart', onButtonDown)
        // .on('touchend', onButtonUp)
        // .on('touchendoutside', onButtonUp)

    // add it to the stage
