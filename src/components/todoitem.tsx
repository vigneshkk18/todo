import { ChangeEventHandler } from 'react';

import TodoText from '../todo/todotext';
import TodoCheckButton from '../todo/todo-check-button';
import TodoImportantButton from '../todo/todo-important-button';
import TodoOverflowButton from '../todo/todo-overflow-button';

import { useTodoStore } from '../context/todo-store';

import { Todo } from '../types/todo';

export default function TodoItem(todo: Todo) {
  const { updateTodoText } = useTodoStore();
  const { id, completed, important, text } = todo;

  const color = completed ? 'bg-[#f5cfd36b]' : 'bg-[#f5cfd396]';

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    updateTodoText(id, e.target.value);

  return (
    <div
      className={`flex gap-2 items-center w-full px-2 py-3 rounded-md ${color}`}
    >
      <TodoCheckButton id={id} completed={completed} />
      <TodoText text={text} completed={completed} inputProps={{ onChange }} />
      <TodoImportantButton important={important} id={id} />
      <TodoOverflowButton {...todo} />
    </div>
  );
}
