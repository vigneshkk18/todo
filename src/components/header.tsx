import { useTodoStore } from '../context/todo-store';

export default function Header() {
  const { isSyncing } = useTodoStore();

  return (
    <header className="flex gap-4 items-center justify-center relative">
      <i data-testid="appIcon" className="bx bxs-check-circle text-5xl"></i>
      <h1 data-testid="pageHeader" className="text-black text-3xl font-bold">Todo App</h1>
      {isSyncing && (
        <i data-testid="syncIndicator" className="bx bx-sync bx-spin text-3xl absolute right-0"></i>
      )}
    </header>
  );
}
