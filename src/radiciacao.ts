export default class Radiciacao {
    static calcular(a:number): number {
        if (a < 0) {
            throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
        }
        return Math.sqrt(a);
    };
};