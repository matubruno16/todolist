import { useState } from "react"

export const Todoinput = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleTodo = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className="mt-6 relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
      </div>
      <input
        type="text"
        className="focus:shadow-lg font-JosefinSans focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleTodo(e)}
      />
    </div>
  );
};
