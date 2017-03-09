/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Layer extends PIXI.Container {
        constructor (image, speed, anchor, repeat, width) {
            var i = 0,
                imageCurrent;

            super();

            this.speed = speed || 1;
            this.repeat = repeat || false;

            if (anchor) {
                this.addAnchor(anchor);
                anchor.addDependent(this);
            }

            if (image) {
                this.backgroundWidth = image.width;

                if (this.repeat) {
                    this.backgrounds = Math.ceil((width * 2) / this.backgroundWidth);
                }
                else {
                    this.backgrounds = 0;
                }

                for (i; i < this.backgrounds; i++) {
                    imageCurrent = new PIXI.Sprite(image);
                    imageCurrent.x = this.backgroundWidth * i -(1 * i);
                    this.addChild(imageCurrent);
                    //this.addChild(new PIXI.Sprite(image));
                }
            }

            PIXI.ticker.shared.add(this.tick, this);
        }

        addAnchor (anchor) {
            this.anchor = anchor;
        }

        move (direction) {
            this.x += this.speed * direction;
        }

        tick () {
            if (1) {
                //that = event.target;
                //bg_width = that.getBounds().width;

                //that.boundsGlobal = that.parent.localToGlobal(that.x, that.y);

                if (0) {
                    this.move(this.anchor.direction * -1);
                }

                if (this.repeat) {
                    if (this.x < -this.backgroundWidth) {
                        //that.x = that.images * this.backgroundWidth;
                        this.x = 0;
                    } else if (this.x > 0) {
                        this.x = -this.backgroundWidth;
                    }
                }
            }
        }
    }

    _super.Layer = Layer;

}(this.kz));
