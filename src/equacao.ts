export default class EquacaoSegundoGrau {
    static calcular(a: number, b: number, c: number): number[] | null {
        if (a === 0) {
            throw new Error("O coeficiente 'a' não pode ser zero.");
        };

        const delta = b ** 2 - 4 * a * c;
        if (delta < 0) {
            return null;
        };

        const raizes: number[] = [];
        const raizDelta = Math.sqrt(delta);
        const x1 = (-b + raizDelta) / (2 * a);
        const x2 = (-b - raizDelta) / (2 * a);

        raizes.push(x1, x2);

        return raizes;
    };
};
