function TodoItem({ id, todoName, todoDate, completed, onToggleComplete, onDeleteClick }) {
  const displayDate = todoDate ? todoDate.split("T")[0] : "";

  return (
    <div
      className={`todo-item w-full p-3.5 bg-white rounded-xl border border-slate-200 border-l-4 transition-all duration-200 ${
        completed
          ? "border-l-slate-300 bg-slate-50/60 opacity-80"
          : "border-l-indigo-500 shadow-xs hover:shadow-md hover:border-slate-300"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
        {/* Checkbox & Task Name */}
        <div className="sm:col-span-6 flex items-center gap-3 truncate pl-1">
          <button
            type="button"
            onClick={() => onToggleComplete(id)}
            className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition duration-150 cursor-pointer shrink-0 ${
              completed
                ? "border-indigo-600 bg-indigo-600 text-white"
                : "border-slate-300 hover:border-indigo-500 text-transparent"
            }`}
            title={completed ? "Mark as incomplete" : "Mark as completed"}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <span
            className={`text-sm truncate transition duration-150 ${
              completed ? "text-slate-400 line-through font-normal" : "text-slate-800 font-semibold"
            }`}
          >
            {todoName}
          </span>
        </div>

        {/* Date */}
        <div className="sm:col-span-4 text-left">
          {displayDate && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
              {displayDate}
            </span>
          )}
        </div>

        {/* Delete Button */}
        <div className="sm:col-span-2 text-right">
          <button
            type="button"
            className="delete-btn w-full sm:w-auto px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 text-xs font-semibold rounded-lg transition active:scale-95 cursor-pointer"
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
