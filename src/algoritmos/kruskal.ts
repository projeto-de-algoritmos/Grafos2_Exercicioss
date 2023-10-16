import { Aresta, Ponto } from "../models/models";

function distanciaManhattan(p1: Ponto, p2: Ponto): number {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

export function kruskal(pontos: Ponto[]): number {
    const n = pontos.length;
    const arestas: Aresta[] = [];

    // Gera todas as possíveis arestas e seus respectivos custos
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            arestas.push([i, j, distanciaManhattan(pontos[i], pontos[j])]);
        }
    }

    // Ordena as arestas por custo em ordem crescente
    arestas.sort((a, b) => a[2] - b[2]);

    const pai = Array(n).fill(0).map((_, i) => i);
    let custoMinimo = 0;

    function encontrarPai(no: number): number {
        if (pai[no] !== no) {
            pai[no] = encontrarPai(pai[no]);
        }
        return pai[no];
    }

    for (let i = 0; i < arestas.length; i++) {
        const [u, v] = arestas[i];
        const pu = encontrarPai(u);
        const pv = encontrarPai(v);
        if (pu !== pv) {
            pai[pu] = pv;
            custoMinimo += arestas[i][2];
        }
    }

    return custoMinimo;
}
