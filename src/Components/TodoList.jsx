/* eslint-disable react/prop-types */
import { Todo } from "./Todo"
import { TodoFilters } from "./TodoFilters"


export const TodoList = ({
  todos,
  handleSetCompleted,
  handleDelete,
  activeFilter,
  showActiveTodos,
  showAllTodos,
  showCompletedTodos,
  handleClearComplete }) => {

  const remainingTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="flex w-full flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} handleSetCompleted={handleSetCompleted}
          handleDelete={handleDelete} />

      )
      )}
      <TodoFilters
        activeFilter={activeFilter}
        total={remainingTodos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete} />


    </div>

  )
}