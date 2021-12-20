import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMeaning {
  definitions: Array<{
    antonyms: Array<any>;
    definition: string;
  }>;
  partOfSpeech: string;
}

interface IWordDetail {
  meanings: Array<IMeaning>;
  mation?: string;
  phonetic?: string;
  phonetics: Array<any>;
  word: string;
}

export interface IResult {
  wordDetail: Array<IWordDetail>;
  meaningArray: Array<any>;
}

const initialState: IResult = {
  wordDetail: [],
  meaningArray: [],
};

export const resultReducer = createSlice({
  name: "resultState",
  initialState,
  reducers: {
    storeResult: (state, action: PayloadAction<IWordDetail[]>) => {
      const allMeaning = action.payload
        .map((row) => {
          return row.meanings
            .map((definite) => {
              return definite.definitions.map((definitions) => {
                return definitions.definition;
              });
            })
            .reduce((array: string[], el) => {
              return array.concat(el);
            }, []);
        })
        .reduce((array: string[], el) => {
          return array.concat(el);
        }, []);
      return { ...state, meaningArray: allMeaning };
    },
    clear() {
      return { ...initialState };
    },
  },
});

export const { storeResult, clear } = resultReducer.actions;
