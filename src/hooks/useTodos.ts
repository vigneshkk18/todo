import { useMemo, useState } from 'react';

import shortUUID from 'short-uuid';

import { Todo } from '../types/todo';
import useLocalStorageSync from './useLocalStorageSync';

const constructTodo = (text: string): Todo => ({
  id: shortUUID.generate(),
  text,
  completed: false,
  important: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const todos = JSON.parse(localStorage.getItem('TODOS') || '[]');
    return todos;
  });
  const isSyncing = useLocalStorageSync(todos, 'TODOS');

  const { importants, tasks } = useMemo(() => {
    const importants: Todo[] = [],
      tasks: Todo[] = [];
    todos.forEach((todo) => {
      if (todo.important) importants.push(todo);
      else tasks.push(todo);
    });
    return { importants, tasks };
  }, [todos]);

  const addTodo = (text: string) => () => {
    const updatedTodos = [...todos, constructTodo(text)];
    console.log(updatedTodos, text);
    setTodos(updatedTodos);
  };
  const updateTodoText = (id: string, text: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, text };
    });
    setTodos(updatedTodos);
  };

  const toggleTodoCompleted = (id: string) => () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    });
    setTodos(updatedTodos);
  };

  const updateTodoCompleted = (id: string, state: boolean) => () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: state };
    });
    setTodos(updatedTodos);
  };

  const toggleTodoImportant = (id: string) => () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, important: !todo.important };
    });
    setTodos(updatedTodos);
  };

  const updateTodoImportant = (id: string, state: boolean) => () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, important: state };
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return {
    todos,
    isSyncing,
    importants,
    tasks,
    addTodo,
    updateTodoText,
    toggleTodoCompleted,
    toggleTodoImportant,
    updateTodoCompleted,
    updateTodoImportant,
    deleteTodo,
  };
}
