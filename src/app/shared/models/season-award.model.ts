export type SeasonAwardAccent = 'gold' | 'wine' | 'soft';

export type SeasonAwardFeatured = 'mvp' | 'finale';

export interface SeasonAward {
  id: string;
  category: string;
  winner: string;
  description: string;
  image: string;
  imageAlt: string;
  accent?: SeasonAwardAccent;
  featured?: SeasonAwardFeatured;
}

export interface AwardsSectionData {
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  awards: SeasonAward[];
  closing: string;
}
