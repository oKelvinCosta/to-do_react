import Searchbar from "./EntryBar";
import TaskTable from "./TaskTable";
import Feedback from "./Feedback";

import taks from "../../tasks.json";

export default function TodoList() {
  /**
   * Returns the number of tasks that still need to be completed.
   * @returns {number}
   */
  function tasksToComplete() {
    return taks.filter((task) => task.done === false).length;
  }

  return (
    <>
      <div className="bg-slate-100 p-6 rounded w-full min-h-[600px]">
        <Searchbar />
        <TaskTable tasks={taks} />
        <Feedback tasksToComplete={tasksToComplete()} />
      </div>
    </>
  );
}
