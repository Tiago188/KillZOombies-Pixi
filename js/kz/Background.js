/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Background extends PIXI.Container {
        constructor (image) {
            super();

            this.addChild(new PIXI.Sprite(image));
        }

        addAnchor (anchor) {
            this.anchor = anchor;
        }

        update () {
            //this._render.render(this);
        }
    }

    _super.Background = Background;

}(this.kz));
