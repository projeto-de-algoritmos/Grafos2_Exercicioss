export type Aresta = [number, number, number]; // [de, para, peso]
export type Grafo = Map<number, Map<number, number>>; // { de: { para: peso } }
export type Ponto = [number, number]; // [x, y]