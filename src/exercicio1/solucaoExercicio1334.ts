import { dijkstra } from "../algoritmos/dijkstra";
import { Aresta, Grafo } from "../models/models";

export function findTheCity(n: number, arestas: Aresta[], limiteDistancia: number): number {
  const grafo: Grafo = new Map();

  for (const [de, para, peso] of arestas) {
    if (!grafo.has(de)) {
      grafo.set(de, new Map());
    }
    if (!grafo.has(para)) {
      grafo.set(para, new Map());
    }

    grafo.get(de)!.set(para, peso);
    grafo.get(para)!.set(de, peso);
  }

  let minVizinhos = Infinity;
  let cidadeResultado = -1;

  for (let i = 0; i < n; i++) {
    const distancias = dijkstra(grafo, i, limiteDistancia);
    let contador = 0;
    for (let j = 0; j < n; j++) {
      if (j !== i && distancias[j] <= limiteDistancia) {
        contador++;
      }
    }

    if (contador <= minVizinhos) {
      minVizinhos = contador;
      cidadeResultado = i;
    }
  }

  return cidadeResultado;
}