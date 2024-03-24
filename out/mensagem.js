"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mensagens = /** @class */ (function () {
    function Mensagens() {
    }
    Mensagens.mensagemResultado = function (resultado) {
        return "Resultado: ".concat(resultado);
    };
    Mensagens.mensagemInicial = "Bem-vindo à calculadora!";
    Mensagens.mensagemOperacao = "Digite a operação desejada (+, -, *): ";
    Mensagens.mensagemNumero1 = "Digite o primeiro número: ";
    Mensagens.mensagemNumero2 = "Digite o segundo número: ";
    return Mensagens;
}());
exports.default = Mensagens;
