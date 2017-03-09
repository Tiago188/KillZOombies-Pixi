/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Houses extends kz.Layer {
        constructor (data, speed, anchor) {
            var i = 0;

            super(null, speed, anchor, null, null);

            this.speed = speed;
            this.addAnchor(anchor);
            anchor.addDependent(this);

            for (i; i < data.length; i++) {
                this.addHouse(data[i]);
            }

            PIXI.ticker.shared.add(this.tick, this);
        }

        addHouse (house) {
            var house_tmp = new PIXI.Sprite(PIXI.loader.resources[house.name].texture);
            house_tmp.x = house.x;
            this.addChild(house_tmp);

            PIXI.ticker.shared.add(function () {
                //
            }, house_tmp);
        }
    }

    _super.Houses = Houses;

}(this.kz));
