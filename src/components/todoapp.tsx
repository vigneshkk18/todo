import { useTodoStore } from '../context/todo-store';
import TodoAdd from './todoadd';
import TodoSection from './todosection';

export default function TodoApp() {
  const { importants, tasks } = useTodoStore();

  return (
    <section className="flex flex-col justify-between h-[calc(100%-60px)]">
      <div>
        <TodoSection title="Important" todoItems={importants} />
        <TodoSection title="Tasks" todoItems={tasks} />
      </div>
      <TodoAdd />
    </section>
  );
}
