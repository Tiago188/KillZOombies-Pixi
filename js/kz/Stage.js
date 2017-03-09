/*global PIXI*/

// namespace:
this.kz = this.kz || {};

(function (_super) {
    'use strict';

    class Stage extends PIXI.Container {
        constructor (width, height) {
            super();
            //Force render with WebGL
            this.named = 'Test';
            this._render = this._render || new PIXI.WebGLRenderer(256, 256);

            //Add the canvas to the HTML document
            document.body.appendChild(this._render.view);

            //this._render.view.style.border = "1px dashed black";
            this._render.backgroundColor = 0x00FF00;

            this._render.view.style.position = "absolute";
            this._render.view.style.display = "block";
            this._render.autoResize = true;
            this._render.resize(width, height);
        }

        getRender () {
            return this._render;
        }

        render () {
            this._render.render(this);
        }
    }

    _super.Stage = Stage;

}(this.kz));
