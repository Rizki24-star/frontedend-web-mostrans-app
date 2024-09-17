import { atom } from "recoil";
import {
  Character,
  GetCharactersQuery,
  GetCharactersQueryVariables,
} from "../__generated__/graphql";

export const characterListState = atom<GetCharactersQuery>({
  key: "characterListState",
  default: {},
});
