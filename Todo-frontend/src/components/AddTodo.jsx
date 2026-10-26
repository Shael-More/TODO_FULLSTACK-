import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="w-full mb-6 p-2.5 sm:p-3 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2.5">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
        <div className="sm:col-span-7">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={todoName}
            onChange={handleNameChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs transition"
          />
        </div>
        <div className="sm:col-span-5">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs transition"
          />
        </div>
      </div>
      <button
        type="button"
        className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 active:scale-[0.99] text-white font-semibold text-sm rounded-xl shadow-md shadow-indigo-100 hover:shadow-indigo-200 transition duration-150 cursor-pointer flex items-center justify-center gap-1.5"
        onClick={handleAddButtonClicked}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
