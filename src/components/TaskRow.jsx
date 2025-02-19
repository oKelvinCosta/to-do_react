import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Eye } from "lucide-react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function TaskRow({
  id,
  done,
  title,
  description,
  handleCheked,
  handleDelete,
}) {
  const navigate = useNavigate();

  /**
   * Navigate to the details page of the task given its id, title and description.
   * The query parameters are set to be more secure.
   *
   * @param {number} id - The unique identifier of the task to be seen in details
   * @param {string} title - The title of the task to be seen in details
   * @param {string} description - The description of the task to be seen in details
   */
  function onSeeDetailsClick(id, title, description) {
    // Let the query more secure
    const query = new URLSearchParams();
    query.set("id", id);
    query.set("title", title);
    query.set("description", description);
    navigate(`/task?%${query.toString()}`);
  }

  return (
    <tr
      className={`mt-4 p-3 border  rounded  flex items-center justify-between
        ${
          !done
            ? "bg-slate-200 border-primary/20"
            : "bg-green-200 border-green-400"
        } 
      `}
    >
      {/* Checkbox */}
      <td className="flex items-center mr-2">
        <Checkbox
          checked={done}
          onClick={() => {
            handleCheked(id);
          }}
          className={`data-[state=checked]:bg-chart-2 data-[state=checked]:border-chart-2`}
        />
      </td>

      {/* Description */}
      <td className="text-left flex items-center grow">{title}</td>

      {/* Edit and Delete */}
      <td className="flex items-center">
        <button
          onClick={() => onSeeDetailsClick(id, title, description)}
          className="mr-2"
        >
          <Eye
            className={`h-5   ${done ? "text-green-600" : "text-gray-500"}`}
          />
        </button>

        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          <Trash2
            className={`h-5   ${done ? "text-green-600" : "text-gray-500"}`}
          />
        </button>
      </td>
    </tr>
  );
}

TaskRow.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleCheked: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
