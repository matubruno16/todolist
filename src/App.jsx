import { useEffect, useState } from "react"
import { TodoList } from "./Components/TodoList"
import { Todoinput } from "./Components/Todoinput"

import iconMoon from './assets/images/icon-moon.svg'
import iconSun from './assets/images/icon-sun.svg'
import { Footer } from "./Components/Footer"


function App() {

  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos.length > 0 ? storedTodos : [
      {
        id: 1,
        title: 'Aprender React',
        completed: false,
      },
      {
        id: 2,
        title: 'Estudiar más de 2 horas',
        completed: false,
      },
      {
        id: 3,
        title: 'Revisar la documentación',
        completed: false,
      },
      {
        id: 4,
        title: 'Descansar y tomar mates',
        completed: false,
      },
    ];
  });
  const [activeFilter, setActiveFilter] = useState('all');

  const [filteredTodos, setFilteredTodos] = useState(todos);


  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const handleSetCompleted = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
    setFilteredTodos(updatedList);
  };


  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }

  }, [activeFilter, todos]);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

  };

  return (
    <>
      <body className={` ${darkMode ? 'bg-gray-900' : ' bg-slate-100 '} min-h-screen font-inter h-full text-gray-100 flex flex-col items-center justify-center `}>
        <div className={` ${darkMode ? 'bg-bg-desktop-dark' : 'bg-bg-desktop-ligth'} w-full h-80 bg-cover bg-no-repeat bg-bottom`}>
          <div className="w-[550px] mx-auto flex items-center pt-20 justify-between px-4">
            <h1 className="text-5xl font-anton font-bold tracking-widest uppercase">
              ToDo
            </h1>
            <img
              className="w-8 h-8"
              src={darkMode ? iconSun : iconMoon}
              alt={darkMode ? 'Icon Sun' : 'Icon Moon'}
              onClick={toggleDarkMode}
            />
          </div>
        </div>
        <div className='flex w-full flex-col items-center max-w-xl px-5 translate-y-[-150px]'>
          <Todoinput addTodo={addTodo} />
          <TodoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleSetCompleted={handleSetCompleted}
            handleDelete={handleDelete}
            handleClearComplete={handleClearComplete}
          />
        </div>
        <Footer />
      </body>
    </>

  );
}

export default App

