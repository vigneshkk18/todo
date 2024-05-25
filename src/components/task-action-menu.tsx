import { PropsWithChildren, forwardRef } from 'react';

import { useTodoStore } from '../context/todo-store';
import { useMenuStore } from '../context/todo-action-menu-store';

function TaskActionMenu(_props: any, ref: any) {
  const { menuState, closeMenu } = useMenuStore();
  const { updateTodoCompleted, updateTodoImportant, deleteTodo } =
    useTodoStore();

  const displayStyle = menuState.isOpen ? 'flex' : 'hidden';

  const callCbWithCloseMenu = (cb: Function) => () => {
    cb();
    closeMenu();
  };

  const id = menuState?.todo?.id;

  return (
    <div
      ref={ref}
      className={`rounded bg-[#f5cfd3de] ${displayStyle} flex-col w-max absolute z-50`}
    >
      <TaskActionMenuButton
        onClick={callCbWithCloseMenu(updateTodoCompleted(id!, true))}
      >
        <i className="bx bx-check-circle text-[#787598] text-xl"></i>Mark as
        completed
      </TaskActionMenuButton>
      <TaskActionMenuButton
        onClick={callCbWithCloseMenu(updateTodoImportant(id!, true))}
      >
        <i className="bx bx-star text-[#787598] text-xl"></i>Mark as important
      </TaskActionMenuButton>
      <TaskActionMenuButton
        onClick={callCbWithCloseMenu(deleteTodo(id!))}
        className="text-[#9f3129]"
      >
        <i className="bx bxs-trash text-xl"></i>Delete task
      </TaskActionMenuButton>
    </div>
  );
}

interface TaskActionMenuButton {
  className?: string;
  onClick: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >['onClick'];
}

function TaskActionMenuButton({
  className = '',
  onClick,
  children,
}: PropsWithChildren<TaskActionMenuButton>) {
  return (
    <button
      className={`${className} hover:bg-[#f5cfd36b] cursor-pointer p-2 flex gap-2 items-center font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default forwardRef(TaskActionMenu);
