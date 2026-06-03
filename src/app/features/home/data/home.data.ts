import type { SeasonStat } from '../../../shared/models/season-stat.model';
import type { SeasonTrip } from '../../../shared/models/season-trip.model';

export const HOME_DATA = {
  badge: 'PRESENTE DE 2 ANOS',
  title: 'Nossa Temporada',
  subtitle: 'Daniel & Bia — 2 anos no mesmo time',
  openingText:
    'Bia, esse troféu não é sobre vencer uma partida. É sobre comemorar mais um ano jogando juntos, somando viagens, filmes, mensagens, risadas e todos os pequenos pontos que fizeram essa temporada ser nossa.',
  tagline: 'Temporada 2025–2026 desbloqueada.',
  ctaLabel: 'Ver retrospectiva',
  preview: {
    title: 'O que essa temporada guarda',
    items: [
      'Estatísticas do nosso ano',
      'Viagens e highlights',
      'Filmes, jogos e vôlei',
      'A maior conversa da temporada',
      'Um ingresso para o próximo set',
    ],
  },
  nfcNote: 'Desbloqueado pelo nosso troféu.',
  scoreboardScrollId: 'season-preview',
} as const;

export const SEASON_SCOREBOARD = {
  badge: 'RETROSPECTIVA',
  title: 'Placar da Temporada',
  subtitle: 'Os números que contam um pouco do nosso segundo ano.',
  closing: {
    before:
      'Entre viagens, filmes, vôlei, jogos e quase 300 mil mensagens, o melhor número continua sendo ',
    highlight: '2',
    after: ': eu e você no mesmo time.',
  },
} as const;

export const SEASON_STATS: SeasonStat[] = [
  {
    value: '3',
    label: 'viagens',
    description: 'Porto de Galinhas, Japaratinga e Brasília',
    accent: 'gold',
  },
  {
    value: '30',
    label: 'filmes',
    description: 'histórias assistidas lado a lado',
    accent: 'soft',
  },
  {
    value: '13',
    label: 'episódios',
    description: 'de Uma Mente Excepcional',
    accent: 'soft',
  },
  {
    value: '6',
    label: 'dias de vôlei',
    description: 'do sofá à arquibancada',
    accent: 'gold',
  },
  {
    value: '20h',
    label: 'de PS5',
    description: 'modo coop, competitivo e caos fofo',
    accent: 'wine',
  },
  {
    value: '291.157',
    label: 'mensagens',
    description: 'desde 13/06/2025',
    accent: 'gold',
    featured: 'messages',
  },
  {
    value: '2',
    label: 'anos',
    description: 'no mesmo time',
    accent: 'wine',
    featured: 'years',
  },
];

export const TRAVEL_SECTION = {
  badge: 'MAPA DA TEMPORADA',
  title: '3 viagens',
  subtitle: 'Porto de Galinhas · Japaratinga · Brasília',
  intro:
    'Foram 3 viagens, 3 cenários diferentes e a mesma certeza: qualquer destino fica melhor quando eu estou com você.',
  closing:
    'De praia em praia, de cidade em cidade, eu fui confirmando que meu lugar favorito é onde você está.',
} as const;

export const SEASON_TRIPS: SeasonTrip[] = [
  {
    title: 'Porto de Galinhas',
    locationLabel: 'Viagem 01',
    description: 'Sol, mar e mais uma memória bonita para guardar da gente.',
    image: 'images/trips/trip_01.jpg',
    tag: 'praia',
  },
  {
    title: 'Japaratinga',
    locationLabel: 'Viagem 02',
    description:
      'Um daqueles lugares que parecem ter sido feitos para virar lembrança.',
    image: 'images/trips/trip_02.jpg',
    tag: 'mar',
  },
  {
    title: 'Brasília',
    locationLabel: 'Viagem 03',
    description:
      'A viagem que fechou nossa temporada com vôlei, torcida e mais uma história para contar.',
    image: 'images/trips/trip_03.jpg',
    tag: 'vôlei',
  },
];
