export interface RootState {
  resultState: {
    wordDetail: Array<{
      meanings: Array<{
        definitions: Array<{
          antonyms: Array<any>;
          definition: string;
        }>;
        partOfSpeech: string;
      }>;
      mation?: string;
      phonetic?: string;
      phonetics: Array<any>;
      word: string;
    }>;
    meaningArray: Array<string>;
  };
}
