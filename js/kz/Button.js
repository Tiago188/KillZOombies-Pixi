/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Button extends PIXI.Sprite {
        constructor (image) {
            super(image);

            this.addChild(new PIXI.Sprite(image));
        }

        update () {
            //this._render.render(this);
        }
    }

    _super.Button = Button;

}(this.kz));
