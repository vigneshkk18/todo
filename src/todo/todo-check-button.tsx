import { IconButton } from '../components/icon-button';
import { useTodoStore } from '../context/todo-store';

interface TodoCheckButton {
  completed: boolean;
  id: string;
}

export default function TodoCheckButton({ completed, id }: TodoCheckButton) {
  const { toggleTodoCompleted } = useTodoStore();

  const iconClass = completed ? 'bx bxs-check-circle' : 'bx bx-check-circle';
  const colorClass = completed
    ? 'text-black'
    : 'text-[#787598] hover:text-black/50';

  return (
    <IconButton onClick={toggleTodoCompleted(id)}>
      <i className={`${iconClass} text-2xl ${colorClass}`}></i>
    </IconButton>
  );
}
