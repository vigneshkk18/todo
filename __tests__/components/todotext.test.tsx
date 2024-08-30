import { screen, render } from '@testing-library/react';
import TodoText from '../../src/todo/todotext';

describe('Todo Text', () => {
  it('should be able to enter text when not completed', () => {
    const { rerender } = render(
      <TodoText
        completed={false}
        text=""
        inputProps={{
          placeholder: 'What do you need to do?',
        }}
      />
    );

    expect(
      screen.getByPlaceholderText(/What do you need to do?/i)
    ).toBeInTheDocument();

    rerender(
      <TodoText
        completed={false}
        text="Start Unit Testing..."
        inputProps={{
          placeholder: 'What do you need to do?',
        }}
      />
    );

    expect(screen.getByRole('textbox')).toHaveValue('Start Unit Testing...');
  });

  it('should be readonly when completed', () => {
    render(
      <TodoText
        completed={true}
        text="Start Unit Testing..."
        inputProps={{
          placeholder: 'What do you need to do?',
        }}
      />
    );

    const text = screen.getByText('Start Unit Testing...');
    console.log(text);
    expect(text).toBeInTheDocument();

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
});
