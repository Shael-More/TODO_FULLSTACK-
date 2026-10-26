const WelcomeMessage = () => {
  return (
    <div className="text-center py-10 px-4 bg-slate-50/80 rounded-2xl border border-dashed border-slate-200 my-4">
      <div className="w-10 h-10 mx-auto rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mb-2 font-bold text-lg">
        ✓
      </div>
      <p className="text-lg font-bold text-slate-700">Enjoy Your Day</p>
      <p className="text-xs text-slate-400 mt-0.5">All tasks are completed!</p>
    </div>
  );
};

export default WelcomeMessage;