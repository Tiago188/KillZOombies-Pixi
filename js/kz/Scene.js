/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Scene extends kz.View {
        constructor () {
            super();
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

    _super.Scene = Scene;

}(this.kz));
