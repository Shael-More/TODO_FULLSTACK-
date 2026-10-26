import TodoItem from './TodoItem';

const TodoItems = ({ todoItems = [], onToggleComplete, onDeleteClick }) => {
  // Sort: active tasks first (0), completed tasks at the bottom (1)
  const sortedItems = [...todoItems].sort(
    (a, b) => Number(a.completed || false) - Number(b.completed || false)
  );

  return (
    <div className="w-full space-y-2.5">
      {sortedItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
          completed={item.completed}
          onToggleComplete={onToggleComplete}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;