import { Palestrante } from "./Palestrante";

export interface RedeSocial {
  id: number;
  nome: string;
  Url: string;
  eventoId?: number;
  palestranteId?: number;
  palestrante: Palestrante[];
}
