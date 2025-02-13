
import { useState } from "react";
import { UserButton } from "@clerk/clerk-react";
import { Plus, Check, Trash2, X } from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [category, setCategory] = useState("personal");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false,
          category,
        },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Tasks</h1>
          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="backdrop-blur-lg bg-white/80 rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="shopping">Shopping</option>
            </select>
            <button
              onClick={addTodo}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
            >
              <Plus size={20} />
              Add
            </button>
          </div>

          <div className="space-y-4">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                  todo.completed
                    ? "bg-gray-50 text-gray-500"
                    : "bg-white shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                      todo.completed
                        ? "border-green-500 bg-green-500 text-white"
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                  >
                    {todo.completed && <Check size={14} />}
                  </button>
                  <span
                    className={`${
                      todo.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {todo.category}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            {todos.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No tasks yet. Add one to get started!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
