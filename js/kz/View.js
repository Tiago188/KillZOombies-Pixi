/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class View extends PIXI.Container {
        constructor () {
            super();
        }

        position () {
            console.log('POSITION');
        }

        destroy () {
            //this.parent.removeChild(this);
            console.log(this.name);
            this.removeChildren();
            kz.stage.removeChild(this);
            delete this;
            //this.destroy();
        }
    }

    _super.View = View;

}(this.kz));
