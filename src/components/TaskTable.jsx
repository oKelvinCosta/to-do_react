import TaskRow from "./TaskRow";

export default function TaskTable({ tasks, handleCheked, handleDelete }) {
  return (
    <>
      <table className="w-full">
        <tbody className="w-full">
          {tasks.map((task) => {
            return (
              <TaskRow
                key={task.id}
                id={task.id}
                done={task.done}
                description={task.description}
                handleCheked={handleCheked}
                handleDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
