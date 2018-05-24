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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BlockUIService = /** @class */ (function () {
    function BlockUIService() {
        this.blockUIEvent = new core_1.EventEmitter();
    }
    BlockUIService.prototype.startBlock = function () {
        this.blockUIEvent.emit(true);
    };
    BlockUIService.prototype.stopBlock = function () {
        this.blockUIEvent.emit(false);
    };
    BlockUIService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BlockUIService);
    return BlockUIService;
}());
exports.BlockUIService = BlockUIService;
//# sourceMappingURL=blockui.service.js.map