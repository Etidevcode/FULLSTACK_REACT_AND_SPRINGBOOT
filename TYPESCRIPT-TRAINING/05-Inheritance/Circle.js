"use strict";
/*
 * Copyright (c) - All Rights Reserved.
 *
 * See the license file for more information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, _raduis) {
        super(theX, theY);
        this._raduis = _raduis;
    }
    get raduis() {
        return this._raduis;
    }
    set raduis(value) {
        this._raduis = value;
    }
    getInfo() {
        return super.getInfo() + `, raduis=${this._raduis}`;
    }
}
exports.Circle = Circle;
