export type RandomWord = {
  id: number;
  swearword: string;
};

export type Word = {
  id: number;
  swearword: string;
  description?: string;
  use: WordUse;
  defaultUse?: string;
  audio: string;
};

export type WordUse = {
  id: number;
  isPublic: boolean;
  audio: string;
};
