import { findTheCity } from "./src/exercicio1/solucaoExercicio1334";
import { Aresta } from "./src/models/models";

// Exemplo de uso
const n = 4;
const edges:Aresta[] = [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]];
const distanceThreshold = 4;
const result = findTheCity(n, edges, distanceThreshold);
console.log('Output:', result); // Output: 3