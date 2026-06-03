export type SeasonStatAccent = 'gold' | 'wine' | 'soft';

export type SeasonStatFeatured = 'messages' | 'years';

export interface SeasonStat {
  value: string;
  label: string;
  description: string;
  accent?: SeasonStatAccent;
  featured?: SeasonStatFeatured;
}
