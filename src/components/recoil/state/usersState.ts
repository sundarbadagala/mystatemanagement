import axios from "axios";
import { selector, selectorFamily } from "recoil";

export const usersSelector = selector({
  key: "usersSelector",
  get: async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await res.data;
    return data;
  },
});

export const usersSelectorFamily = selectorFamily({
  key: "usersSelectorFamily",
  get: (userId: any) => async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await res.data;
    return data;
  },
});
