import { minCostConnectPointsExercicio2_2 } from "./src/exercicio2.2/index";
import { Ponto } from "./src/models/models";

const pontos: Ponto[] = [[3, 12], [-2, 5], [-4, 1]];
const custoMinimo = minCostConnectPointsExercicio2_2(pontos);
console.log("Custo mínimo para conectar todos os pontos:", custoMinimo);  // Saída: 18