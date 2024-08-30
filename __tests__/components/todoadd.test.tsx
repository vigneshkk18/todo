import { screen, render } from '@testing-library/react';
import TodoAdd from '../../src/components/todoadd';
import {userEvent} from '@testing-library/user-event';

describe('Todo Add', () => {
  it('should be rendered properly', () => {
    render(<TodoAdd />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('should be able type into todo', async () => {
    render(<TodoAdd />);

    const todo = screen.getByRole('textbox');
    userEvent.setup();
    
    await userEvent.type(todo, 'Perform Unit Testing...');

    expect(todo).toHaveValue('Perform Unit Testing...');
  });

  it('should be able add todo', async () => {
    render(<TodoAdd />);

    const todo = screen.getByRole('textbox');
    userEvent.setup();
    
    await userEvent.type(todo, 'Perform Unit Testing...');

    expect(todo).toHaveValue('Perform Unit Testing...');
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/add/i);
    
    await userEvent.click(button);

    expect(todo).toHaveValue('');
  });
});
