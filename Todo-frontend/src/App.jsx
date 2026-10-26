import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useEffect, useState } from "react";
import {
  addItemToServer,
  deleteTodoItemFromServer,
  getItemsFromServer,
  markItemCompletedOnServer,
} from "./services/itemsService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      setTodoItems(initialItems || []);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const item = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [...todoItems, item];
    setTodoItems(newTodoItems);
  };

  
  const handleDeleteItem = async (id) => {
    const deletedId = await deleteTodoItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  const handleToggleComplete = async (id) => {
    try {
      const updated = await markItemCompletedOnServer(id);
      setTodoItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, completed: updated.completed ?? !item.completed } : item
        )
      );
    } catch (err) {
      console.error("Failed to mark completed:", err);
      // Optimistic fallback toggle
      setTodoItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, completed: true } : item
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 flex justify-center items-start">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onToggleComplete={handleToggleComplete}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>
    </div>
  );
}

export default App;
