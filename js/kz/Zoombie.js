/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Zoombie extends dragonBones.PixiFactory {
        constructor (name) {
            var armature,
                data = {};

            data.image = PIXI.loader.resources[name + '_tex'].texture;
            data.texture = PIXI.loader.resources[name + '_dat'].data;
            data.bones = PIXI.loader.resources[name + '_ske'].data;

            super();
            super.parseDragonBonesData(data.bones);
            super.parseTextureAtlasData(data.texture, data.image);
            var armature = super.buildArmatureDisplay('Armature');
            //armature = dragonBones.PixiFactory.factory.buildArmatureDisplay(data.name);
            //armature.y = 400 * Math.random();
            //armature.y += (5 - Math.random() * 10);
            armature.direction = 1;
            armature.scale.x = 0.34;
            armature.scale.y = 0.34;
            armature.speed = 1 * Math.random() + 0.4;
        	armature.range = Math.random() * 100 + 200;
        	armature.life = 100;
            armature.fatigue = 0;
            armature.fatigueMax = Math.random() * 100 + 60;

            armature.animate = function (value) {
                if (this.status !== value) {
                    this.animation.play(value);
                    this.status = value;
                }
            }

            armature.chase = function () {
                if (Math.abs(this.x - this.target.x) <= this.range) {
                    if (!kz.collider.hitTest(this, this.target)) {
                        if ((this.x - this.width/2) > (this.target.x + this.target.width)) {
                            this.direction = -1;
                            this.scale.x = -0.34;//this.scale.x;
                        } else if ((this.x + this.width/2) < (this.target.x - this.target.width)) {
                            this.direction = 1;
                            this.scale.x = Math.abs(this.scale.x);
                        }

                        this.animate('walk');
                        this.move(this.speed * this.direction);
                    } else {
                        this.animate('eat');
                        this.target.life--;
                    }
                }
                else {
                    this.animate('idle');
                }
            };

            armature.move = function(speed_increment) {
                var player_width = this.width * this.scale.x,
                    player_posx = this.dx;

                this.dx += speed_increment;
                this.x += speed_increment;

                this.scale.x = Math.abs(this.scale.x) * this.direction;
            }

            armature.shoot = function() {

            }

            armature.animationComplete = function () {
                console.log(COMPLETE);
            }

            armature.tick = function () {
                this.chase();
            }

            armature.animate('idle');
//console.log(armature);
            //armature.zOrder = armature.y;
            //this.addChild(armature);

            //armatureDisplay.y = stage._render.height * 0.5;
            //armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, animationComplete, this);
            //armatureDisplay.addEventListener(Event.COMPLETE, animationComplete, this);
            //dragonBones.WorldClock.clock.add(armatureDisplay);


            PIXI.ticker.shared.add(armature.tick, armature);

            return armature;
        }
    }

    _super.Zoombie = Zoombie;

}(this.kz));
