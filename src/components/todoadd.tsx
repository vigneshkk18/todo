import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from 'react';

import TodoText from '../todo/todotext';

import { useTodoStore } from '../context/todo-store';

export default function TodoAdd() {
  const { addTodo } = useTodoStore();
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setText(e.target.value);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Enter' || !text.trim().length) return;
    addTodo(text)();
    setText('');
    inputRef.current?.focus();
  };

  const addTodoHandler = () => {
    if (!text.trim().length) return;
    addTodo(text)();
    setText('');
    inputRef.current?.focus();
  };

  return (
    <div className="flex gap-2 items-center w-full rounded-md bg-[#f5cfd36b]">
      <TodoText
        text={text}
        completed={false}
        inputProps={{
          placeholder: 'What do you need to do?',
          className: 'placeholder:text-[#787598] px-2 py-3 pl-3',
          onChange,
          onKeyDown,
          ref: inputRef,
          'data-testid': 'addTodoInput',
        }}
      />
      <button
        onClick={addTodoHandler}
        data-testid="addTodoButton"
        className="h-full px-4 flex gap-2 items-center justify-center font-semibold bg-black text-white rounded-r-lg"
      >
        <i className="bx bx-plus text-xl"></i>
        Add
      </button>
    </div>
  );
}
