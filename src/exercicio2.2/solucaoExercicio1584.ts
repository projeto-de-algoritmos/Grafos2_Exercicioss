import { Ponto } from "../models/models";
import { kruskal } from "../algoritmos/kruskal";

export function minCostConnectPoints(pontos: Ponto[]): number {
    return kruskal(pontos);
}