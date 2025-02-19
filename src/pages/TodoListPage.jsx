import { useState, useEffect } from "react";
import EntryBar from "@/components/EntryBar";
import TaskTable from "@/components/TaskTable";
import Feedback from "@/components/Feedback";
import Title from "@/components/Title";

export default function TodoListPage() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // When the tasks state changes, update the local storage.
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  /**
   * Adds a new task to the task list.
   * Updates the tasks state with the new task added.
   *
   * @param {string} title - The title of the task to be added.
   * @param {string} description - The description of the task to be added.
   */
  function onAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      done: false,
      title: title,
      description: description,
    };
    setTasks([...tasks, newTask]);
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
      <Title className="">Todo list React</Title>
      <EntryBar className="" onAddTask={onAddTask} />
      {/* Is not commom to use class here, so I needed to enable pass as prop in the component  */}
      <TaskTable
        className="grow"
        tasks={tasks}
        handleCheked={handleCheked}
        handleDelete={handleDelete}
      />
      <Feedback className="" tasksToComplete={tasksToComplete()} />
    </>
  );
}
