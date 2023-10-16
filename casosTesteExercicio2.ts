import { minCostConnectPoints } from "./src/exercicio2/solucaoExercicio1584";
import { Ponto } from "./src/models/models";

const pontos: Ponto[] = [[3, 12], [-2, 5], [-4, 1]];
const custoMinimo = minCostConnectPoints(pontos);
console.log("Custo mínimo para conectar todos os pontos:", custoMinimo);  // Saída: 18