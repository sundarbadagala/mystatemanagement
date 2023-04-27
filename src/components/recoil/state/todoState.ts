import { atom, atomFamily, selector, selectorFamily, useRecoilCallback } from "recoil";

export const todosAtom = atom<any>({
  key: "todosAtom",
  default: [],
});

export const addTodosSelector = selector({
  key: "addTodosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    return todos;
  },
  set: ({ set, get }, newTitle: any) => {
    if (newTitle !== "") {
      const newTodo = {
        id: Date.now(),
        title: newTitle,
      };
      const todos = get(todosAtom);
      set(todosAtom, [...todos, newTodo]);
    }
  },
});

export const deleteTodoSelector = selector({
  key: "deleteTodoSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    return todos;
  },
  set: ({ set, get }, newId: any) => {
    if (newId !== "") {
      const todos = get(todosAtom);
      const newTodos = todos.filter((item: any) => item.id !== newId);
      set(todosAtom, newTodos);
    }
  },
});

export const editTodoSelector = selector({
  key: "editTodoSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    return todos;
  },
  set: ({ set, get }, data: any) => {
    const { title, id } = data;
    if (title !== "" && id !== "") {
      const todos = get(todosAtom);
      const newTodos = todos.map((item: any) => {
        if (item.id === id) {
          return { ...item, title: title };
        } else {
          return item;
        }
      });
      set(todosAtom, newTodos);
    }
  },
});

export const getTodoSelectorFamily = selectorFamily({
  key: "todoSelectorFamily",
  get:
    (id) =>
    ({ get }: any) => {
      const todos = get(todosAtom);
      const todo = todos.filter((item: any) => item.id === id);
      return todo;
    },
  set:
    (id) =>
    ({ set, get }, newVal) => {
      if (newVal === "") {
        const todos = get(todosAtom);
        set(
          todosAtom,
          todos.filter((item: any) => item.id !== id)
        );
      } else if (newVal !== "") {
        const todos = get(todosAtom);
        set(
          todosAtom,
          todos.map((item: any) => {
            if (item.id === id) {
              return { ...item, title: newVal };
            } else {
              return item;
            }
          })
        );
      }
    },
});

export const todosIdsAtom = atom<any>({
  key: "todosIdsAtom",
  default: [],
});

export const todosAtomFamily = atomFamily<any, any>({
  key: "todosAtomFamily",
  default: {
    title: "",
    id: undefined,
  },
});