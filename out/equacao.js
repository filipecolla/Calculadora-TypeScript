"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EquacaoSegundoGrau = /** @class */ (function () {
    function EquacaoSegundoGrau() {
    }
    EquacaoSegundoGrau.calcular = function (a, b, c) {
        if (a === 0) {
            throw new Error("O coeficiente 'a' não pode ser zero.");
        }
        ;
        var delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            return null;
        }
        ;
        var raizes = [];
        var raizDelta = Math.sqrt(delta);
        var x1 = (-b + raizDelta) / (2 * a);
        var x2 = (-b - raizDelta) / (2 * a);
        raizes.push(x1, x2);
        return raizes;
    };
    ;
    return EquacaoSegundoGrau;
}());
exports.default = EquacaoSegundoGrau;
;
