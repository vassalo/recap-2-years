export type GameStatAccent = 'gold' | 'wine' | 'soft';

export interface GameStat {
  hours: string;
  title: string;
  description: string;
  accent?: GameStatAccent;
}

export interface GamingPhotoMemory {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  seal?: string;
  cozy?: boolean;
}

export interface GamingSaveGame {
  seal: string;
  player1: string;
  player2: string;
  timePlayed: string;
  mode: string;
  status: string;
}
