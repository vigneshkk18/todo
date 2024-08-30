import { screen, render } from '@testing-library/react';
import TodoSection from '../../src/components/todosection';
import { Todo } from '../../src/types/todo';

describe('Todo Section', () => {
  const incompleteItems: Todo[] = [
    {
      id: '1',
      completed: false,
      text: 'Unit Testing...',
      important: false,
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '2',
      completed: false,
      text: 'E2E Testing...',
      important: false,
      createdAt: '',
      updatedAt: '',
    },
  ];

  it('should be rendered properly', () => {
    render(<TodoSection title="Todos" todoItems={incompleteItems} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Todos');
    expect(screen.getByRole('list').children).toHaveLength(incompleteItems.length);

    
  });
});
