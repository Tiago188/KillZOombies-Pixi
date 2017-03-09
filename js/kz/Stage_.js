/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    function Stage(width, height) {
        var container = new PIXI.Container();
        //Force render with WebGL
        this.render = this.render || new PIXI.WebGLRenderer(256, 256);

        //Add the canvas to the HTML document
        document.body.appendChild(this.render.view);

        //this.render.view.style.border = "1px dashed black";
        this.render.backgroundColor = 0x00FF00;

        this.render.view.style.position = "absolute";
        this.render.view.style.display = "block";
        this.render.autoResize = true;
        this.render.resize(width, height);

        //Create a container object called the `stage`
        //return new PIXI.Container();
        return this;
    }

    Stage.prototype = Object.create(PIXI.Container.prototype);
    //Stage.construct = Stage;

    _super.Stage = Stage;

}(this.kz));
