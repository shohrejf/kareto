import axios from "axios";
import { clear, storeResult } from "../store/reducer";

export const sendGetRequest = async (word: string, dispatch: any) => {
  dispatch(clear());
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    dispatch(storeResult(response.data));
  } catch (err) {
    console.error(err);
  }
};
