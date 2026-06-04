export type ScreenMemoryType = 'movies' | 'series';

export interface SeriesSleepMoment {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ScreenMemory {
  type: ScreenMemoryType;
  value: string;
  title: string;
  subtitle?: string;
  description: string;
  highlight: string;
  emotionalNote?: string;
  image?: string;
  imageAlt?: string;
}
