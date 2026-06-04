import type { AwardsSectionData } from '../../../shared/models/season-award.model';
import type { FinalLetterData } from '../../../shared/models/final-letter.model';
import type { GameStat, GamingPhotoMemory } from '../../../shared/models/gaming.model';
import type { MessagesSectionData } from '../../../shared/models/messages-section.model';
import type {
  ScreenMemory,
  SeriesSleepMoment,
} from '../../../shared/models/screen-memory.model';
import type { VolleyballMoment } from '../../../shared/models/volleyball-moment.model';
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
    tag: 'resort',
  },
  {
    title: 'Japaratinga',
    locationLabel: 'Viagem 02',
    description:
      'Um daqueles lugares que parecem ter sido feitos para virar lembrança.',
    image: 'images/trips/trip_02.jpg',
    tag: 'praia',
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

export const SCREEN_SECTION = {
  badge: 'TELA COMPARTILHADA',
  title: '30 filmes e 13 episódios',
  subtitle: 'Histórias que a gente assistiu lado a lado.',
  intro:
    'No fim, não era só sobre o que estava passando na tela. Era sobre ter você ali comigo.',
  closing:
    'Entre filmes, episódios e comentários no meio da cena, a tela virou só mais um jeito de dividir tempo com você.',
} as const;

export const SCREEN_MEMORIES: ScreenMemory[] = [
  {
    type: 'movies',
    value: '30',
    title: 'filmes',
    description:
      '30 filmes assistidos juntos. Alguns bons, alguns duvidosos, alguns inesquecíveis — mas todos viraram parte da nossa coleção de momentos.',
    highlight:
      '30 filmes. 30 desculpas para ficar mais um pouco do seu lado.',
    image: 'images/screenshots/letterboxd.png',
    imageAlt: 'Print do Letterboxd com os filmes assistidos juntos em 2026',
  },
  {
    type: 'series',
    value: '13',
    title: 'episódios',
    subtitle: 'Uma Mente Excepcional',
    description:
      '13 episódios acompanhando uma mente brilhante, enquanto uma das melhores partes era simplesmente assistir tudo isso com você. E, em alguns desses momentos, a gente estava tão relaxado e em paz que acabava até pegando no sono no meio dos episódios.',
    highlight:
      'Uma temporada acompanhada em capítulos, pausas, comentários, silêncio confortável e cochilos compartilhados.',
    emotionalNote:
      'Às vezes, a melhor parte nem era o episódio — era dormir tranquilo do seu lado.',
  },
];

export const SERIES_SLEEP_SUBSECTION = {
  title: 'Nosso lado mais confortável',
} as const;

export const SERIES_SLEEP_MOMENTS = [
  {
    id: 'sleep-bia',
    title: 'Você dormindo do meu lado',
    description:
      'Em alguns episódios, o conforto era tanto que o sono ganhava da trama.',
    image: 'images/screenshots/bia-dormindo.jpg',
    imageAlt: 'Bia dormindo ao lado de Daniel enquanto assistiam a série',
  },
  {
    id: 'sleep-daniel',
    title: 'Eu dormindo do seu lado',
    description:
      'E às vezes a série virava só trilha sonora para mais um momento de paz com você.',
    image: 'images/screenshots/daniel-dormindo.jpg',
    imageAlt: 'Daniel dormindo ao lado de Bia enquanto assistiam a série',
  },
] as const satisfies readonly SeriesSleepMoment[];

export const VOLLEYBALL_SECTION = {
  badge: 'VÔLEI DA TEMPORADA',
  title: '6 dias de vôlei',
  subtitle: 'Do sofá à arquibancada.',
  intro:
    'Foram 6 dias de vôlei, entre sofá, areia e arquibancada. No fim, o melhor time continuou sendo o nosso.',
  closing: {
    before:
      'A gente viu jogo pela TV, viveu vôlei na praia e viajou para assistir de perto. Mas meu ponto favorito ainda é estar no ',
    highlight: 'mesmo time',
    after: ' que você.',
  },
} as const;

export const VOLLEYBALL_MOMENTS: VolleyballMoment[] = [
  {
    amount: '1 dia',
    title: 'Vôlei pela TV na casa da Bia',
    description: 'O começo da nossa torcida dentro de casa.',
    location: 'Casa da Bia',
    type: 'home',
    image: 'images/volleyball/volei-tv.jpg',
    imageAlt: 'Vôlei sendo assistido pela TV na casa da Bia',
  },
  {
    amount: '1 dia',
    title: 'Vôlei de praia na Praia do Francês',
    description: 'Nosso rally na areia.',
    location: 'Praia do Francês',
    type: 'beach',
    image: 'images/volleyball/praia-do-frances.jpg',
    imageAlt: 'Dia de vôlei de praia na Praia do Francês',
  },
  {
    amount: '4 dias',
    title: 'Vôlei em Brasília',
    description:
      'A viagem que transformou essa fase em uma verdadeira temporada.',
    location: 'Brasília',
    type: 'trip',
    featured: true,
    image: 'images/volleyball/brasilia-volei.jpg',
    imageAlt: 'Viagem para Brasília para assistir jogos de vôlei',
  },
];

export const GAMING_SECTION = {
  badge: 'MODO COOP',
  title: '20 horas no PlayStation 5',
  subtitle: 'A cooperação fora das quadras.',
  intro:
    'Foram 20 horas jogando juntos — às vezes cooperando, às vezes competindo, às vezes só rindo do caos. Mas, no fim, todo jogo ficou melhor porque era com você.',
  saveGame: {
    seal: 'SAVE DA TEMPORADA',
    player1: 'Daniel',
    player2: 'Bia',
    timePlayed: '20h',
    mode: 'Cooperação, risadas e um pouco de competitividade',
    status: 'próxima fase desbloqueada',
  },
  photoSectionTitle: 'Memórias em modo coop',
  closing:
    'Se a vida fosse um jogo, eu escolheria continuar no modo cooperativo com você.',
} as const;

export const GAMING_STATS: GameStat[] = [
  {
    hours: '10h',
    title: 'It Takes Two',
    description:
      'O jogo mais a nossa cara: cada um com seu jeito, mas os dois precisando se entender para passar de fase.',
    accent: 'gold',
  },
  {
    hours: '5h',
    title: 'eFootball',
    description:
      'Rivalidade saudável, controle na mão e risadas no meio da disputa.',
    accent: 'soft',
  },
  {
    hours: '3h',
    title: 'Spider-Man',
    description: 'Teia, cidade e comentários aleatórios no sofá.',
    accent: 'soft',
  },
  {
    hours: '2h',
    title: 'Sackboy',
    description: 'Caos bonitinho, fases coloridas e mais um motivo para rir junto.',
    accent: 'wine',
  },
];

export const GAMING_PHOTOS: GamingPhotoMemory[] = [
  {
    id: 'game-casa-daniel',
    title: 'Jogando videogame na minha casa',
    description:
      'Uma daquelas fases em que a diversão era tão boa quanto ter você do meu lado.',
    image: 'images/gaming/game-na-minha-casa.jpg',
    imageAlt: 'Daniel e Bia jogando videogame juntos na casa de Daniel',
  },
  {
    id: 'madrugada-bia',
    title: 'De madrugada na casa da Bia',
    description:
      'Eu jogando, você agarradinha no meu braço e o sono vencendo devagar — um dos meus modos favoritos de estar com você.',
    image: 'images/gaming/madrugada-na-casa-da-bia.jpg',
    imageAlt:
      'Daniel jogando videogame enquanto Bia cochila agarrada em seu braço na casa dela',
    seal: 'coop + cochilo',
    cozy: true,
  },
];

export const MESSAGES_SECTION: MessagesSectionData = {
  badge: 'A MAIOR CONVERSA',
  title: 'A maior conversa da temporada',
  subtitle: 'Desde 13/06/2025, o nosso dia a dia também virou história.',
  totalMessages: '291.157',
  mainLabel: 'mensagens trocadas',
  startDateLabel: 'desde 13/06/2025',
  description:
    'No meio de bom dia, boa noite, saudade, planos, figurinhas, conversas aleatórias e declarações escondidas no cotidiano, a gente foi escrevendo mais um ano da nossa história.',
  miniStats: [
    {
      label: 'Bom dia e boa noite',
      value: 'rotina',
      description: 'pequenos lembretes de que a gente estava ali',
    },
    {
      label: 'Planos e saudade',
      value: 'presença',
      description: 'mesmo quando cada um estava em um lugar',
    },
    {
      label: 'Figurinhas e besteiras',
      value: 'nosso jeito',
      description: 'porque nem toda declaração precisa parecer séria',
    },
  ],
  highlight:
    'Quase 300 mil mensagens, mas ainda tem coisa que eu só consigo dizer olhando para você.',
  closing:
    'Porque amar também é isso: continuar escolhendo conversar, contar o dia, mandar besteira, perguntar se chegou bem e transformar o comum em presença.',
};

export const AWARDS_SECTION: AwardsSectionData = {
  badge: 'PREMIAÇÃO',
  title: 'Prêmios da Temporada',
  subtitle: 'Alguns troféus simbólicos para tudo que fez esse ano ser nosso.',
  intro:
    'Se essa temporada tivesse uma cerimônia de premiação, esses seriam alguns dos prêmios que eu entregaria para os nossos melhores momentos.',
  awards: [
    {
      id: 'mvp',
      category: 'MVP da temporada',
      winner: 'Bia',
      description:
        'Porque nenhum highlight desse ano teria o mesmo brilho sem você.',
      image: 'images/awards/mvp-da-temporada.jpg',
      imageAlt: 'Bia em um momento especial da temporada',
      accent: 'gold',
      featured: 'mvp',
    },
    {
      id: 'dupla',
      category: 'Melhor dupla',
      winner: 'Daniel & Bia',
      description: 'Dois corações, um time.',
      image: 'images/awards/melhor-dupla.jpg',
      imageAlt: 'Daniel e Bia juntos representando a melhor dupla',
      accent: 'wine',
    },
    {
      id: 'torcida',
      category: 'Melhor rolê',
      winner: 'Nós dois',
      description: 'No sofá ou na poltrona.',
      image: 'images/awards/melhor-torcida.jpg',
      imageAlt: 'Daniel e Bia torcendo ou assistindo algo juntos',
      accent: 'soft',
    },
    {
      id: 'coop',
      category: 'Melhor modo de jogo',
      winner: 'Coop',
      description: 'Porque com você eu sempre prefiro jogar junto.',
      image: 'images/awards/melhor-modo-de-jogo.jpg',
      imageAlt: 'Daniel e Bia em um momento de videogame juntos',
      accent: 'wine',
    },
    {
      id: 'campeonato',
      category: 'Melhor campeonato',
      winner: 'Nosso segundo ano',
      description:
        'Uma temporada cheia de pontos, rallies, fases, cenas e mensagens.',
      image: 'images/awards/melhor-campeonato.jpg',
      imageAlt: 'Memória especial do segundo ano de namoro de Daniel e Bia',
      accent: 'gold',
      featured: 'finale',
    },
  ],
  closing:
    'No fim, o troféu é só um símbolo. O prêmio de verdade foi viver tudo isso com você.',
};

export const FINAL_LETTER: FinalLetterData = {
  badge: 'CARTA FINAL',
  title: 'Bia,',
  paragraphs: [
    'Esse segundo ano teve viagens, filmes, série, vôlei, jogos, mensagens e muitos momentos que talvez pareçam pequenos por fora, mas que para mim viraram parte enorme da nossa história.',
    'O troféu é só um símbolo. O prêmio de verdade foi viver essa temporada com você.',
    'Obrigado por estar no meu time, por dividir o sofá, a praia, a arquibancada, o controle, a tela e o dia a dia comigo.',
    'Eu escolheria tudo de novo. E, se você topar, quero começar a próxima temporada do seu lado.',
  ],
  signature: 'Com amor, Daniel',
  footer: '2 anos no mesmo time.',
};
