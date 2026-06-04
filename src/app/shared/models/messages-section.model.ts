export interface MessageMiniStat {
  label: string;
  value: string;
  description: string;
}

export interface MessagesSectionData {
  badge: string;
  title: string;
  subtitle: string;
  totalMessages: string;
  mainLabel: string;
  startDateLabel: string;
  description: string;
  highlight: string;
  closing: string;
  miniStats: MessageMiniStat[];
}
