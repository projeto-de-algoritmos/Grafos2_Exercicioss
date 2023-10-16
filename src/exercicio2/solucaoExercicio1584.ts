import { arvoreMinimaPrim } from "../algoritmos/prim";
import { Ponto } from "../models/models";

export function minCostConnectPoints(pontos: Ponto[]): number {
    return arvoreMinimaPrim(pontos);
}