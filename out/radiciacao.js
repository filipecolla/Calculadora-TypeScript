"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Radiciacao = /** @class */ (function () {
    function Radiciacao() {
    }
    Radiciacao.calcular = function (a) {
        if (a < 0) {
            throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
        }
        return Math.sqrt(a);
    };
    ;
    return Radiciacao;
}());
exports.default = Radiciacao;
;
