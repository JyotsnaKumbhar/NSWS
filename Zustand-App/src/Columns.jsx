import Task from "./Task";
import { useState } from "react";
import { useStore } from "./store.js";
import classNames from "classnames";

const Columns = ({ state }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [drop, setDrop] = useState(false);

  const tasks = useStore((store) => store.tasks);
  
  const addTask = useStore((store) => store.addTask);

  const setDraggedTask = useStore((store)=>store.setDraggedTask);
  const draggedTask = useStore((store)=>store.draggedTask);
  const moveTask = useStore((store)=>store.moveTask);

  const filteredTasks = tasks.filter((task) => task.state === state);

  return (
    <div
      className={classNames("column", { drop: drop })}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragleave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}

      onDrop={(e)=>{
        setDrop(false)
        e.preventDefault()
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}

    >
      <div className="titlewrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>

      {filteredTasks.map((task) => (
        <Task key={task.id} title={task.title} />
      ))}

      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input
              className="task-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="submit-btn"
              onClick={() => {
                addTask({
                  id: Date.now(),
                  title: text,
                  state: state,
                });

                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Columns;
