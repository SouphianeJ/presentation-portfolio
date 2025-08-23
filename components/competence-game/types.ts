export type Competence = string[]; // tableau de groupes de mots dans l'ordre attendu

export interface RoundResult {
  competence: Competence;
  builtSentence: string;
  hits: number; // bons tirs
  wrongHits: number; // leurres touchés
  timeMs: number;
  scoreDelta: number; // points gagnés pendant la manche
}

export interface FeedbackPayload {
  result: RoundResult;
  rating: number; // 1..5
  comment?: string;
  createdAt: string; // ISO
}

