import { Root } from "../types/types";

type LocalData = {
  [key: string]: Root;
}

export const mappedLocalData: LocalData = {
  belem: require('../../belem.json'),
  ananindeua: require('../../ananindeua.json'),
}