/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Player extends dragonBones.PixiFactory {
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
            armature.dependents = [];
            armature.frame = {left: 250, right: 350};
            armature.scale.x = 0.6;
            armature.scale.y = 0.6;
            armature.life = 100;
            armature.speed = 0;
            armature.speedMax = 2;

            armature.addDependent = function (dependent) {
                this.dependents.push(dependent);
            };

            armature.animate = function (name, sound) {
                if (this.status !== name) {
                    this.animation.play(name);
                    this.status = name;

                    //PIXI.audio.play(sound);
                }
            }

            armature.move = function() {
                var i = 0,
                    direction = kz.pad.axis.x * -1,
                    player_width = this.width * this.scale.x,
                    player_posx = this.dx,
                    timeLapse = kz.game.time - kz.pad.axis.time,
                    timeLapseMax = 60,
                    zombiesLength = kz.zoombies.length,
                    dependentsLength = this.dependents.length;

                if (timeLapse <= timeLapseMax) {
                    this.speed = this.speedMax * timeLapse / timeLapseMax;
                } else {
                    timeLapse = timeLapseMax;
                }

                this.dx += this.speed * kz.pad.axis.x;

                if (this.dx < player_width/2 || this.dx > kz.level.distance - player_width/2) {
                    this.dx = player_posx;
                    return;
                }

                this.animate('walk');

                if (this.dx < this.frame.left || this.dx > (kz.level.distance - this.frame.right)) {
                    this.x += this.speed * kz.pad.axis.x;
                }

                this.scale.x = Math.abs(this.scale.x) * kz.pad.axis.x;

                for (i; i < zombiesLength; i++) {
                    //kz.zoombies[i].move(this.speed * direction);
                    kz.zoombies[i].move(this.speed * direction);
                }

                for (i = 0; i < dependentsLength; i++) {
                    this.dependents[i].move(direction * timeLapse / timeLapseMax);
                }
            }

            armature.shoot = function () {

            }

            armature.getAnimationStateName = function () {
                return this.armature.animation.lastAnimationState.name;
            }

            armature.animationComplete = function () {
                console.log(COMPLETE);
            }

            armature.tick = function () {
                if (kz.pad.axis.x !== 0) {
                    this.move();
                } else if (kz.pad.fire) {
                    if (this.status === 'shoot' && this.getAnimationStateName() === 'idle') {
                        kz.pad.fire = 0;
                    } else {
                        this.animate('shoot', 'snd_shotgun');
                    }
                } else {
                    this.animate('idle');
                }
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

    _super.Player = Player;

}(this.kz));
