import Header from './components/header';
import TodoApp from './components/todoapp';

import TodoStore from './context/todo-store';
import MenuStore from './context/todo-action-menu-store';

function App() {
  return (
    <TodoStore>
      <MenuStore>
        <main className="mx-auto h-full max-h-full p-6 md:px-0 w-full md:max-w-3xl">
          <Header />
          <TodoApp />
        </main>
      </MenuStore>
    </TodoStore>
  );
}

export default App;
