import closeIcon from '../assets/images/close-icon.svg'
import checkIcon from '../assets/images/icon-check.svg'
export const Todo = ({ todo, handleSetCompleted, handleDelete }) => {
  const { id, title, completed } = todo

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div className="flex items-center">
        <span
          onClick={() => handleSetCompleted(id)}
          className={`cursor-pointer ${completed ? 'bg-green-700 p-1 rounded-full' : 'border border-gray-500 rounded-full p-3'}`}
        >
          {completed ? (
            <img className="h-4 w-4 " src={checkIcon} alt="Check Icons" />
          ) : null}
        </span>
        <p className={`pl-3 ${completed ? 'line-through' : ''}`}>{title}</p>
      </div>
      <img
        onClick={() => handleDelete(id)}
        className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in-out"
        src={closeIcon}
        alt="Close Icons"
      />
    </div>
  )
}
