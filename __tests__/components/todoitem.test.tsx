import { screen, render } from "@testing-library/react";
import TodoItem from "../../src/components/todoitem";
import { Todo } from "../../src/types/todo";

describe('TodoItem', () => {
  it('should be rendered in editable state if not completed', () => {
    const todo: Todo = {
      id: "123",
      completed: false,
      text: "Unit Testing...",
      important: false,
      createdAt: "",
      updatedAt: ""
    }

    render(<TodoItem {...todo} />);

    expect(screen.getByRole('textbox')).toHaveValue('Unit Testing...');
  });

  it('should be rendered in readonly state if completed', () => {
    const todo: Todo = {
      id: "123",
      completed: true,
      text: "Unit Testing...",
      important: false,
      createdAt: "",
      updatedAt: ""
    }

    render(<TodoItem {...todo} />);

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByText('Unit Testing...')).toBeInTheDocument();
  });
});