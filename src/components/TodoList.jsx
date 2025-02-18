import { useState } from "react";
import EntryBar from "./EntryBar";
import TaskTable from "./TaskTable";
import Feedback from "./Feedback";

// import fs from "fs";

import tasksJson from "../../tasks.json";

export default function TodoList() {
  const [tasks, setTasks] = useState(tasksJson);

  /**
   * Toggles the 'done' status of a task identified by the given id.
   * Updates the tasks state with the modified task list.
   *
   * @param {number} id - The unique identifier of the task to be modified.
   */

  function handleCheked(taskId) {
    const newTasks = tasks.map((taskItem) => {
      if (taskItem.id === taskId) {
        return { ...taskItem, done: !taskItem.done };
      }
      return taskItem;
    });
    setTasks(newTasks);
  }

  /**
   * Deletes the task identified by the given id.
   * Updates the tasks state with the modified task list.
   *
   * @param {number} taskId - The unique identifier of the task to be deleted.
   */
  function handleDelete(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function onAddTask(description) {
    const newTask = {
      id: tasks.length + 1,
      done: false,
      description: description,
    };
    setTasks([...tasks, newTask]);

    // Update JSON file
    // const fileName = "../../tasks.json";
    // fs.writeFile(tasksJson, JSON.stringify(tasksJson), function writeJSON(err) {
    //   if (err) return console.log(err);
    //   console.log(JSON.stringify(tasksJson));
    //   console.log("writing to " + fileName);
    // });
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
        <EntryBar onAddTask={onAddTask} />
        <TaskTable
          tasks={tasks}
          handleCheked={handleCheked}
          handleDelete={handleDelete}
        />
        <Feedback tasksToComplete={tasksToComplete()} />
      </div>
    </>
  );
}
