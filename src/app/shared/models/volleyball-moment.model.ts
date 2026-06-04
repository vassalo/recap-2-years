export type VolleyballMomentType = 'home' | 'beach' | 'trip';

export interface VolleyballMoment {
  amount: string;
  title: string;
  description: string;
  location?: string;
  type: VolleyballMomentType;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}
