import classNames from "classnames";
import  {useStore}  from "./store";
import { FaTrash } from "react-icons/fa";

const Task = ({ title }) => {
  const task = useStore((store) => store.tasks.find((t) => t.title === title));
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store)=>store.setDraggedTask);

  if (!task) return null;

  
  return (
    <div className="task">
       <div className="task-title" draggable onDragStart={() => setDraggedTask(task)}>{task.title}</div>

      <div className="task-footer">
        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash />
        </button>
        <div
          className={classNames("status-indicator", task.state.toLowerCase())}
        >
          {task.state}
        </div>
      </div>
    </div>
  );
};

export default Task;
