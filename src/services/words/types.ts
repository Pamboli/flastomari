export type RandomWord = {
  id: number;
  swearword: string;
};

export type WordUse = {
  id: number;
  use: string;
};

export type Word = RandomWord & {
  description?: string;
  use?: string;
};
