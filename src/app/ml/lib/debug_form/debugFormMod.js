"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var debugForm_1 = require("./debugForm");
var common_1 = require("@angular/common");
var DebugFormMod = (function () {
    function DebugFormMod() {
    }
    DebugFormMod = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule], declarations: [debugForm_1.DebugForm], exports: [debugForm_1.DebugForm] }), 
        __metadata('design:paramtypes', [])
    ], DebugFormMod);
    return DebugFormMod;
}());
exports.DebugFormMod = DebugFormMod;
//# sourceMappingURL=debugFormMod.js.map