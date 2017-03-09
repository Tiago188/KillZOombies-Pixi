/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Dialog extends kz.View {
        constructor () {
            super();

            super.position();
        }
    }

    _super.Dialog = Dialog;

}(this.kz));
