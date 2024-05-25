import {
  MouseEventHandler,
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';

import { Todo } from '../types/todo';
import TaskActionMenu from '../components/task-action-menu';

type MenuState =
  | {
      isOpen: true;
      todo: Todo;
    }
  | {
      isOpen: false;
      todo: null;
    };

interface MenuStoreCtx {
  menuState: MenuState;
  openMenu: (todo: Todo) => MouseEventHandler<HTMLButtonElement>;
  closeMenu: () => void;
}

const MenuStoreCtx = createContext<MenuStoreCtx>({
  menuState: { isOpen: false, todo: null },
  openMenu: (_todo: Todo) => () => {},
  closeMenu: () => {},
});

export default function MenuStore({ children }: PropsWithChildren) {
  const [menuState, setMenuState] = useState<MenuState>({
    isOpen: false,
    todo: null,
  });
  const actionMenu = useRef<HTMLDivElement>(null);

  const openMenu = (todo: Todo) =>
    ((e) => {
      e.stopPropagation();
      const rect = e.currentTarget.getBoundingClientRect();
      if (actionMenu.current) {
        actionMenu.current.style.right = `${window.innerWidth - rect.right}px`;
        actionMenu.current.style.top = `${rect.bottom + 10}px`;
      }
      setMenuState({
        isOpen: true,
        todo,
      });
    }) as MouseEventHandler<HTMLButtonElement>;
  const closeMenu = () => setMenuState({ isOpen: false, todo: null });

  return (
    <MenuStoreCtx.Provider value={{ menuState, openMenu, closeMenu }}>
      <div onClick={closeMenu} className="h-full">
        {children}
      </div>
      <TaskActionMenu ref={actionMenu} />
    </MenuStoreCtx.Provider>
  );
}

export function useMenuStore() {
  return useContext(MenuStoreCtx);
}
