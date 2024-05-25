import { useTodoStore } from '../context/todo-store';

export default function Header() {
  const { isSyncing } = useTodoStore();

  return (
    <header className="flex gap-4 items-center justify-center relative">
      <i className="bx bxs-check-circle text-5xl"></i>
      <h1 className="text-black text-3xl font-bold">Todo App</h1>
      {isSyncing && (
        <i className="bx bx-sync bx-spin text-3xl absolute right-0"></i>
      )}
    </header>
  );
}
