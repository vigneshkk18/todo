import { PropsWithChildren, createContext, useContext } from 'react';

import { useTodo } from '../hooks/useTodos';

const TodoStoreCtx = createContext<ReturnType<typeof useTodo>>({
  todos: [],
  tasks: [],
  importants: [],
  isSyncing: false,
  addTodo: (_text: string) => () => {},
  updateTodoText: (_id: string, _text: string) => {},
  toggleTodoCompleted: (_id: string) => () => {},
  toggleTodoImportant: (_id: string) => () => {},
  deleteTodo: (_id: string) => () => {},
  updateTodoCompleted: (_id: string, _state: boolean) => () => {},
  updateTodoImportant: (_id: string, _state: boolean) => () => {},
});

export default function TodoStore({ children }: PropsWithChildren) {
  const store = useTodo();

  return (
    <TodoStoreCtx.Provider value={store}>{children}</TodoStoreCtx.Provider>
  );
}

export function useTodoStore() {
  return useContext(TodoStoreCtx);
}
