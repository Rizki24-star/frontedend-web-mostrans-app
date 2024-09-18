import { atom } from "recoil";
import {
  Character,
  GetCharacterQuery,
  GetCharactersQuery,
  GetCharactersQueryVariables,
} from "../__generated__/graphql";

export const characterListState = atom<GetCharactersQuery>({
  key: "characterListState",
  default: {},
});

export const characterState = atom<GetCharacterQuery>({
  key: "characterListState",
  default: {},
});

export const characterLocationState = atom<{
  name: string;
  character_id: string;
}>({
  key: "characterLocationsState",
  default: { name: "", character_id: "" },
});
