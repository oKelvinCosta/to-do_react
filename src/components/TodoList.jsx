import { useState } from "react";
import Searchbar from "./EntryBar";
import TaskTable from "./TaskTable";
import Feedback from "./Feedback";

import tasksJson from "../../tasks.json";

export default function TodoList() {
  const [tasks, setTasks] = useState(tasksJson);

  /**
   * Toggles the 'done' status of a task identified by the given id.
   * Updates the tasks state with the modified task list.
   *
   * @param {number} id - The unique identifier of the task to be modified.
   */

  function handleCheked(id) {
    const newTasks = tasks.map((taskItem) => {
      if (taskItem.id === id) {
        return { ...taskItem, done: !taskItem.done };
      }
      return taskItem;
    });
    setTasks(newTasks);
    setTasks(newTasks);
  }

  /**
   * Returns the number of tasks that still need to be completed.
   * @returns {number}
   */
  function tasksToComplete() {
    return tasks.filter((task) => task.done === false).length;
  }

  return (
    <>
      <div className="bg-slate-100 p-6 rounded w-full min-h-[600px]">
        <Searchbar />
        <TaskTable tasks={tasks} handleCheked={handleCheked} />
        <Feedback tasksToComplete={tasksToComplete()} />
      </div>
    </>
  );
}
