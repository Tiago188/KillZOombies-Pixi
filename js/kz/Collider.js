/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    var instance = null;

    class Collider {
        constructor () {
            if (!instance) {
                instance = this;
            }

            return instance;
        }

        hitTest (object, objectTarget) {
            var horizontal_collide = false,
                vertical_collide = false,
                obj1 = {},
                obj2 = {},
                p;

            obj1.xmin = object.x - object.pivot.x * Math.abs(object.scale.x);
            obj1.xmax = obj1.xmin + object.width * Math.abs(object.scale.x);
            obj1.ymin = object.y - object.pivot.y * object.scale.y;
            obj1.ymax = obj1.ymin + object.height * object.scale.y;

            /*
            if (objectTarget.type && objectTarget.type == 'house') {
                p = objectTarget.parent.localToGlobal(objectTarget.x, objectTarget.y);
                obj2.x = p.x;
                obj2.y = p.y;
            } else {
                obj2.x = objectTarget.x;
                obj2.y = objectTarget.y;
            }
            */

            obj2.x = objectTarget.x;
            obj2.y = objectTarget.y;

            obj2.xmin = obj2.x - objectTarget.pivot.x * Math.abs(objectTarget.scale.x);
            obj2.xmax = obj2.xmin + objectTarget.width  * Math.abs(objectTarget.scale.x);
            obj2.ymin = obj2.y - objectTarget.pivot.y * objectTarget.scale.y;
            obj2.ymax = obj2.ymin + objectTarget.height * objectTarget.scale.y;

            if (obj1.xmin <= obj2.xmax && (obj1.xmax >= obj2.xmin || obj1.xmax >= obj2.xmax)) {
                horizontal_collide = true;
            }

            if ((obj1.ymin >= obj2.ymin && obj1.ymin <= obj2.ymax) || (obj1.ymin <= obj2.ymin && obj1.ymax >= obj2.ymin)) {
                vertical_collide = true;
            }

            return horizontal_collide;// && vertical_collide;
        }
    }

    _super.Collider = Collider;

}(this.kz));
