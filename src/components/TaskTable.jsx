import TaskRow from "./TaskRow";
import PropTypes from "prop-types";

export default function TaskTable({
  tasks,
  handleCheked,
  handleDelete,
  ...props
}) {
  return (
    <>
      <table className="w-full" {...props}>
        <tbody className="w-full">
          {tasks.map((task) => {
            return (
              <TaskRow
                key={task.id}
                id={task.id}
                done={task.done}
                title={task.title}
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

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleCheked: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
