import axios from "axios";
import { atom, selector, selectorFamily } from "recoil";

export const usersTwoUserIdAtom = atom({
    key:'usersTwoUserIdAtom',
    default:''
})

export const usersTwoSelector = selector({
  key: "usersTwoSelector",
  get: async ({get}) => {
    const userId = get(usersTwoUserIdAtom)
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId && userId}`);
    const data = await res.data;
    return data;
  },
});

export const usersTwoSelectorFamily = selectorFamily({
  key: "usersTwoSelectorFamily",
  get: (userId: any) => async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await res.data;
    return data;
  },
});
