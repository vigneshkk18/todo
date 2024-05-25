import { IconButton } from '../components/icon-button';

import { useMenuStore } from '../context/todo-action-menu-store';

import { Todo } from '../types/todo';

interface TodoOverflowButton {
  active: boolean;
  id: string;
}

export default function TodoOverflowButton(todo: Todo) {
  const { menuState, openMenu } = useMenuStore();
  const colorClass =
    menuState.isOpen && menuState.todo.id === todo.id
      ? 'bg-gray-600/30 text-black'
      : 'text-[#787598] hover:text-black/50 hover:bg-gray-600/20';

  return (
    <IconButton onClick={openMenu(todo)}>
      <i
        className={`bx bx-dots-horizontal-rounded text-xl rounded px-1 ${colorClass}`}
      ></i>
    </IconButton>
  );
}
