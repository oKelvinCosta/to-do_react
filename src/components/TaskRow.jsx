import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

import PropTypes from "prop-types";

export default function TaskRow({
  id,
  done,
  description,
  handleCheked,
  handleDelete,
}) {
  function archiveDoneTask(id) {
    console.log(id);
  }

  return (
    <tr
      className={`mt-4 p-3 border  rounded
        ${
          !done
            ? "bg-slate-200 border-primary/20"
            : "bg-green-200 border-green-400"
        } 
      flex justify-between items-centers`}
    >
      <td className="flex items-center">
        <Checkbox
          onClick={() => {
            handleCheked(id);
          }}
          className={`data-[state=checked]:bg-chart-2 data-[state=checked]:border-chart-2`}
        />
      </td>
      <td className="text-left flex items-center">{description}</td>
      <td className="flex items-center">
        <button
          onClick={() => {
            archiveDoneTask(id);
          }}
        >
          <Trash2
            onClick={() => {
              handleDelete(id);
            }}
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
  description: PropTypes.string.isRequired,
  handleCheked: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
