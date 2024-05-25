import { IconButton } from '../components/icon-button';

import { useTodoStore } from '../context/todo-store';

interface TodoImportantButton {
  important: boolean;
  id: string;
}

export default function TodoImportantButton({
  important,
  id,
}: TodoImportantButton) {
  const { toggleTodoImportant } = useTodoStore();

  const iconClass = important ? 'bx bxs-star' : 'bx bx-star';
  const colorClass = important
    ? 'text-[#dab66b]'
    : 'text-[#787598] hover:text-black/50';

  return (
    <IconButton onClick={toggleTodoImportant(id)}>
      <i className={`${iconClass} text-xl ${colorClass}`}></i>
    </IconButton>
  );
}
