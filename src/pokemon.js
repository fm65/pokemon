"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Fight = exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, life) {
        this.name = name;
        this.speed = speed;
        this.life = life;
    }
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.getSpeed = function () {
        return this.speed;
    };
    Pokemon.prototype.getLife = function () {
        return this.life;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var Fight = /** @class */ (function () {
    function Fight(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }
    Fight.prototype.firstAttacking = function () {
        if (this.pokemon1.getSpeed() > this.pokemon2.getSpeed()) {
            console.log(this.pokemon1.getName() + " attaque " + this.pokemon2.getName());
            return this.pokemon1;
        }
        else if (this.pokemon1.getSpeed() < this.pokemon2.getSpeed()) {
            console.log(this.pokemon2.getName() + " attaque " + this.pokemon1.getName());
            return this.pokemon2;
        }
        else {
            console.log("***WARNING: undefined behavior");
            return undefined;
        }
    };
    Fight.prototype.isPokemonDead = function (pokemon) {
        return pokemon.life <= 0;
    };
    Fight.prototype.processFight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var firstAttacking, lastAttacking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstAttacking = this.firstAttacking();
                        lastAttacking = firstAttacking == this.pokemon1 ? this.pokemon2 : this.pokemon1;
                        return [4 /*yield*/, this.processAttack(firstAttacking, lastAttacking)];
                    case 1:
                        _a.sent();
                        if (!!this.isPokemonDead(lastAttacking)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.processAttack(lastAttacking, firstAttacking)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Fight.prototype.processAttack = function (pokemon1, pokemon2) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                pokemon2.life -= 1;
                if (this.getNumber(0, 1) == 0) {
                    pokemon1.life -= 1;
                }
                else {
                    pokemon2.life -= 1;
                }
                return [2 /*return*/];
            });
        });
    };
    Fight.prototype.getNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Fight.prototype.winner = function () {
        return this.isPokemonDead(this.pokemon1) ? this.pokemon1 : this.pokemon2;
    };
    return Fight;
}());
exports.Fight = Fight;
var pkm1 = new Pokemon("Pokemon1", 7, 5);
var pkm2 = new Pokemon("Pokemon2", 4, 5);
var fight = new Fight(pkm1, pkm2);
fight.processFight();
console.log("The winner is : ", fight.winner());
