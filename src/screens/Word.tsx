import { Word } from "../services/words/types";

type Props = {
  word: Word;
};

export function WordScreen({ word }: Props) {
  return (
    <div>
      <div>
        <h1>{word.swearword}</h1>
        <h2>Extra?</h2>
        <p>{word.description}</p>
        <p>{word.use}</p>
      </div>
    </div>
  );
}
