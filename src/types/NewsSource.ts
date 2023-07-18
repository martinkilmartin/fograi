export type NewsSource = {
  name: string;
  url: string;
  est: number;
  about?: string;
  description?: string[];
  logo?: string;
  emos: string[];
  langs?: string[];
  tags?: string[];
  socials?: Record<string, string>;
  headerBG?: string;
  primaryColor?: string;
  secondaryColor?: string;
  audio?: string;
};
