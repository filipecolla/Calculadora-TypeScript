import Soma from "./soma";
import Subtracao from "./subtracao";
import Multiplicacao from "./multiplicacao";
import * as readline from 'readline';
import Radiciacao from "./radiciacao";
import Potenciacao from "./potenciacao";
import EquacaoSegundoGrau from "./equacao";
import Divisao from "./divisao";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciar() {
    console.log('Bem-Vindo a Calculadora!')
    rl.question('Digite a operação desejada (somar, subtrair, multiplicar, divisão, potenciação, raiz e equação): ', (operacao) => {
        if (operacao.toLowerCase() === 'raiz') {
            rl.question('Digite o número para calcular a raiz quadrada: ', (numero) => {
                const num = parseFloat(numero);
                try {
                    console.log(`O resultado da Radiciação é: ${Radiciacao.calcular(num)}\n`);
                } catch (error) {
                    console.log('Error');
                };
                rl.question('Deseja continuar calculando? (sim/nao): ', (resposta) => {
                    if (resposta.toLowerCase() === 'sim') {
                        iniciar();
                    } else {
                        rl.close();
                    };
                });
            });
        } else if (operacao.toLowerCase() === 'equação') {
            rl.question('Digite o primeiro número: ', (numero1) => {
                rl.question('Digite o segundo número: ', (numero2) => {
                    rl.question('Digite o terceiro número: ', (numero3) => {
                        const num1 = parseFloat(numero1);
                        const num2 = parseFloat(numero2);
                        const num3 = parseFloat(numero3);

                        try {
                            console.log(`O resultado da Equação de segundo grau é: ${EquacaoSegundoGrau.calcular(num1, num2, num3)}\n`)
                        } catch (error) {
                            console.log('Error');
                        };
                        rl.question('Deseja continuar calculando? (sim/nao): ', (resposta) => {
                            if (resposta.toLowerCase() === 'sim') {
                                iniciar();
                            } else {
                                rl.close();
                            };
                        });
                    });

                });
            });
        } else {
            rl.question('Digite o primeiro número: ', (numero1) => {
                rl.question('Digite o segundo número: ', (numero2) => {
                    const num1 = parseFloat(numero1);
                    const num2 = parseFloat(numero2);

                    switch (operacao.toLowerCase()) {
                        case 'somar':
                            console.log(`O resultado da soma é: ${Soma.calcular(num1, num2)}\n`);
                            break;
                        case 'subtrair':
                            console.log(`O resultado da subtração é: ${Subtracao.calcular(num1, num2)}\n`);
                            break;
                        case 'multiplicar':
                            console.log(`O resultado da multiplicação é: ${Multiplicacao.calcular(num1, num2)}\n`);
                            break;
                        case 'potenciação':
                            console.log(`O resultado da potenciação é: ${Potenciacao.calcular(num1, num2)}\n`);
                            break;
                        case 'divisão':
                            console.log(`O resultado da divisão é: ${Divisao.calcular(num1, num2)}\n`);
                            break;
                        case 'sair':
                            rl.close();
                            return;
                        default:
                            console.log("Operação inválida.\n");
                            break;
                    };
                    rl.question('Deseja continuar calculando? (sim/nao): ', (resposta) => {
                        if (resposta.toLowerCase() === 'sim') {
                            iniciar();
                        } else {
                            rl.close();
                        };
                    });
                });
            });
    }});
};

iniciar();
