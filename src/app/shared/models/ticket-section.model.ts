export interface TicketField {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface TicketSectionData {
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  ticketHeader: string;
  ticketTitle: string;
  code: string;
  fields: TicketField[];
  ticketFooter: string;
  closing: string;
  buttonLabel: string;
  unlockedButtonLabel: string;
  unlockedMessage: string;
  siteFooter: string;
}
