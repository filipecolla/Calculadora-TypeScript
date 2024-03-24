"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var soma_1 = __importDefault(require("./soma"));
var subtracao_1 = __importDefault(require("./subtracao"));
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
var readline = __importStar(require("readline"));
var radiciacao_1 = __importDefault(require("./radiciacao"));
var potenciacao_1 = __importDefault(require("./potenciacao"));
var equacao_1 = __importDefault(require("./equacao"));
var divisao_1 = __importDefault(require("./divisao"));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function iniciar() {
    console.log('Bem-Vindo a Calculadora!');
    rl.question('Digite a operação desejada (somar, subtrair, multiplicar, divisão, potenciação, raiz e equação): ', function (operacao) {
        if (operacao.toLowerCase() === 'raiz') {
            rl.question('Digite o número para calcular a raiz quadrada: ', function (numero) {
                var num = parseFloat(numero);
                try {
                    console.log("O resultado da Radicia\u00E7\u00E3o \u00E9: ".concat(radiciacao_1.default.calcular(num), "\n"));
                }
                catch (error) {
                    console.log('Error');
                }
                ;
                rl.question('Deseja continuar calculando? (sim/nao): ', function (resposta) {
                    if (resposta.toLowerCase() === 'sim') {
                        iniciar();
                    }
                    else {
                        rl.close();
                    }
                    ;
                });
            });
        }
        else if (operacao.toLowerCase() === 'equação') {
            rl.question('Digite o primeiro número: ', function (numero1) {
                rl.question('Digite o segundo número: ', function (numero2) {
                    rl.question('Digite o terceiro número: ', function (numero3) {
                        var num1 = parseFloat(numero1);
                        var num2 = parseFloat(numero2);
                        var num3 = parseFloat(numero3);
                        try {
                            console.log("O resultado da Equa\u00E7\u00E3o de segundo grau \u00E9: ".concat(equacao_1.default.calcular(num1, num2, num3), "\n"));
                        }
                        catch (error) {
                            console.log('Error');
                        }
                        ;
                        rl.question('Deseja continuar calculando? (sim/nao): ', function (resposta) {
                            if (resposta.toLowerCase() === 'sim') {
                                iniciar();
                            }
                            else {
                                rl.close();
                            }
                            ;
                        });
                    });
                });
            });
        }
        else {
            rl.question('Digite o primeiro número: ', function (numero1) {
                rl.question('Digite o segundo número: ', function (numero2) {
                    var num1 = parseFloat(numero1);
                    var num2 = parseFloat(numero2);
                    switch (operacao.toLowerCase()) {
                        case 'somar':
                            console.log("O resultado da soma \u00E9: ".concat(soma_1.default.calcular(num1, num2), "\n"));
                            break;
                        case 'subtrair':
                            console.log("O resultado da subtra\u00E7\u00E3o \u00E9: ".concat(subtracao_1.default.calcular(num1, num2), "\n"));
                            break;
                        case 'multiplicar':
                            console.log("O resultado da multiplica\u00E7\u00E3o \u00E9: ".concat(multiplicacao_1.default.calcular(num1, num2), "\n"));
                            break;
                        case 'potenciação':
                            console.log("O resultado da potencia\u00E7\u00E3o \u00E9: ".concat(potenciacao_1.default.calcular(num1, num2), "\n"));
                            break;
                        case 'divisão':
                            console.log("O resultado da divis\u00E3o \u00E9: ".concat(divisao_1.default.calcular(num1, num2), "\n"));
                            break;
                        case 'sair':
                            rl.close();
                            return;
                        default:
                            console.log("Operação inválida.\n");
                            break;
                    }
                    ;
                    rl.question('Deseja continuar calculando? (sim/nao): ', function (resposta) {
                        if (resposta.toLowerCase() === 'sim') {
                            iniciar();
                        }
                        else {
                            rl.close();
                        }
                        ;
                    });
                });
            });
        }
    });
}
;
iniciar();
