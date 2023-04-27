import { atom, selector } from "recoil";

export const textAtom = atom({
  key: "textAtom",
  default: "",
});

export const textSelector = selector({
  key: "textSelector",
  get: ({ get }) => {
    const txt: any = get(textAtom);
    return txt.length;
  },
});
