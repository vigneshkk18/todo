import TodoItem from './todoitem';

import { Todo } from '../types/todo';

interface TodoSection {
  title: string;
  todoItems: Todo[];
}

export default function TodoSection({ title, todoItems }: TodoSection) {
  if (!todoItems.length) return null;

  return (
    <section className="pt-6">
      <h2 className="font-semibold text-3xl">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2">
        {todoItems.map((todoItem) => (
          <TodoItem key={todoItem.id} {...todoItem} />
        ))}
      </ul>
    </section>
  );
}
