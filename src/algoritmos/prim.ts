import { Ponto } from "../models/models";

function distanciaManhattan(p1: Ponto, p2: Ponto): number {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

export function arvoreMinimaPrim(pontos: Ponto[]): number {
    const n = pontos.length;
    const visitados = new Array(n).fill(false);
    const distancias = new Array(n).fill(Infinity);
    const listaAdj: Map<number, number>[] = new Array(n).fill(null).map(() => new Map());

    distancias[0] = 0;

    for (let i = 0; i < n; i++) {
        let minDist = Infinity;
        let u = -1;

        for (let j = 0; j < n; j++) {
            if (!visitados[j] && distancias[j] < minDist) {
                minDist = distancias[j];
                u = j;
            }
        }

        visitados[u] = true;

        for (let v = 0; v < n; v++) {
            if (!visitados[v]) {
                const distancia = distanciaManhattan(pontos[u], pontos[v]);
                if (distancia < distancias[v]) {
                    distancias[v] = distancia;
                    listaAdj[u].set(v, distancia);
                    listaAdj[v].set(u, distancia);
                }
            }
        }
    }

    let custoMinimo = 0;
    for (let i = 0; i < n; i++) {
        custoMinimo += distancias[i];
    }

    return custoMinimo;
}