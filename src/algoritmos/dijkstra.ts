import { Grafo } from "../models/models";

// type Aresta = [number, number, number]; // [de, para, peso]
// type Grafo = Map<number, Map<number, number>>; // { de: { para: peso } }
 

export function dijkstra(grafo: Grafo, inicio: number, limiteDistancia: number): number[] {
        const distancias: number[] = new Array(grafo.size).fill(Number.MAX_SAFE_INTEGER);
        distancias[inicio] = 0;
    
        const minHeap: [number, number][] = [[inicio, 0]];
    
        while (minHeap.length > 0) {
        const [atual, distanciaAtual] = minHeap.shift()!;
    
        if (distanciaAtual > limiteDistancia) break;
    
        if (distanciaAtual > distancias[atual]) continue;
    
        const vizinhos = grafo.get(atual);
    
        if (vizinhos) {
            for (const [vizinho, peso] of vizinhos) {
            const dist = distanciaAtual + peso;
            if (dist < distancias[vizinho]) {
                distancias[vizinho] = dist;
                minHeap.push([vizinho, dist]);
                minHeap.sort((a, b) => a[1] - b[1]);
            }
            }
        }
        }
    
        return distancias;
}