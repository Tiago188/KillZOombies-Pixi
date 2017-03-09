/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Load extends PIXI.Container {
        constructor () {
            super();

            //Use Pixi's built-in `loader` object to load an image
            PIXI.loader
                .add("bg_splash", "assets/images/bg_splash.jpg")
                .add("bg", "assets/images/bg_win.jpg")
                .add("bg_characters", "assets/images/bg_characters.jpg")
                .add("bg_levels", "assets/images/bg_levels.jpg")
                .add("spiderman", "assets/images/spider.png")
                .add("btn_move", "assets/images/btn_move.png")
                .add("btn_shoot", "assets/images/btn_shoot.png")
                .add("btn_pause", "assets/images/btn_pause.png")
                .add("btn_main", "assets/images/btn_main.jpg")
                .add("btn_play", "assets/images/btn_play.jpg")
                .add("btn_options", "assets/images/btn_options.jpg")
                .add("btn_credits", "assets/images/btn_credits.jpg")
                .add("house1", "assets/images/house1.png")
                .add("house2", "assets/images/house2.png")
                .add("house3", "assets/images/house3.png")
                .add("bg_street", "assets/images/bg_street.png")
                .add("bg_ground", "assets/images/bg_ground.png")
                .add("bg_city_front", "assets/images/bg_city_front.png")
                .add("bg_city_middle", "assets/images/bg_city_middle.png")
                .add("bg_city_back", "assets/images/bg_city_back.png")
                .add("character1_tex", "assets/characters/character1_tex.png")
                .add("character1_dat", "assets/characters/character1_tex.json")
                .add("character1_ske", "assets/characters/character1_ske.json")
                .add("zoombie_tex", "assets/enemies/zoombie_tex.png")
                .add("zoombie_dat", "assets/enemies/zoombie_tex.json")
                .add("zoombie_ske", "assets/enemies/zoombie_ske.json")
                .add("snd_menu", "assets/audio/enter-menu.ogg")
                .add("snd_level", "assets/audio/jenison.ogg")
                //.add("snd_shotgun", "assets/audio/shotgun.ogg")
                .on("progress", this.progress)
                .load(this.complete);
        }

        complete () {
            kz.level = {
                distance: 1500
            }

            kz.zoombies = [];

            kz.splash = new kz.Splash();
        }

        progress (loader, resource) {
            //Display the file `url` currently being loaded
            console.log("loading: " + resource.url);

            //Display the precentage of files currently loaded
            console.log("progress: " + loader.progress + "%");
        }
    }

    _super.Load = Load;

}(this.kz));
