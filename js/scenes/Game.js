/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    var instance = null;

    class Game extends kz.Scene {
        constructor () {
            super();

            kz.stage.removeChildren();

            if (!instance) {
                instance = this;
            }

            this.time = 0;
            this.deltaTime = 0;

            /*
            var player2 = new kz.Player({
                image: PIXI.loader.resources.character_tex.texture,
                texture: PIXI.loader.resources.character_dat.data,
                bones: PIXI.loader.resources.character_ske.data,
                name: 'Armature'
            });
            player2.animation.play("walk");
            player2.x = 300 * 0.1;
            */

            this.addLayers();

            kz.collider = new kz.Collider();

            PIXI.ticker.shared.add(this.tick, this);

            kz.stage.addChild(this);

            //return instance;
        }

        addPlayer (layer) {
            var player = new kz.Player('character1');
            player.animation.play("idle");
            player.x = 60;
            player.y = (5 - Math.random() * 10);
            player.dx = player.x;
            layer.addChild(player);

            return player;
        }

        addZoombies (layer, target) {
            var i, zoombie;

            for (i = 0; i < 5; i++) {
                zoombie = new kz.Zoombie('zoombie');
                zoombie.animation.play("idle");
                zoombie.x = (kz.level.distance - 200) * Math.random() + 200;
                zoombie.y = (5 - Math.random() * 10);
                zoombie.dx = zoombie.x;
                zoombie.target = target;

                kz.zoombies.push(zoombie);

                layer.addChild(zoombie);
            }
        }

        addLayers (layers) {
            var hud,
                layer_moving_area,
                player,
                houses_data,
                layer_houses,
                layer_ground,
                layer_street,
                layer_cityfront,
                layer_citymiddle,
                layer_cityback;

            hud = new kz.HUD();

            layer_moving_area = new kz.Layer();
            layer_moving_area.y = 465;

            player = this.addPlayer(layer_moving_area);
            this.addZoombies(layer_moving_area, player);

            houses_data = [
                {name: 'house1', x: 40, y: 10},
                {name: 'house2', x: 320, y: 0},
                {name: 'house1', x: 540, y: 0},
                {name: 'house3', x: 750, y: 5},
                {name: 'house3', x: 940, y: 10}
            ];

            layer_houses = new kz.Houses(houses_data, 0.7, player);
            layer_houses.y = 300;

            layer_ground = new kz.Layer(PIXI.loader.resources.bg_ground.texture, 2, player, true, 600);
            layer_ground.alpha = 0.2;
            layer_ground.y = 500;

            layer_street = new kz.Layer(PIXI.loader.resources.bg_street.texture, 2, player, true, 600);
            layer_street.alpha = 0.2;
            layer_street.y = 456;

            layer_cityfront = new kz.Layer(PIXI.loader.resources.bg_city_front.texture, 1.0, player, true, 600);
            layer_cityfront.y = 300;

            layer_citymiddle = new kz.Layer(PIXI.loader.resources.bg_city_middle.texture, 0.8, player, true, 600);
            layer_citymiddle.y = 195;

            layer_cityback = new kz.Layer(PIXI.loader.resources.bg_city_back.texture, 0.6, player, true, 600);
            layer_cityback.alpha = 0.2;
            layer_cityback.y = 105;

            this.addChild(layer_cityback, layer_citymiddle, layer_cityfront, layer_houses, layer_ground, layer_street, layer_moving_area, hud);
        }

        tick (deltaTime) {
            //console.log(deltaTime);
            this.time += deltaTime;
            this.deltaTime = deltaTime;

            kz.stage.render();
            //dragonBones.WorldClock.clock.advanceTime(-1);
        }
    }

    _super.Game = Game;

}(this.kz));
