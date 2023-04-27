import { atom, selector } from "recoil";

export const converterAtom = atom<any>({
  key: "converterAtom",
  default: 1,
});

export const converterSelector = selector({
  key: "converterSelector",
  get: ({ get }) => {
    const val = get(converterAtom);
    return val * 10;
  },
  set: ({ set }, newVal) => {
    //@ts-ignore
    const val = newVal / 10;
    set(converterAtom, val);
  },
});
