import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { CircleCheck } from "lucide-react";

export default function TaskRow({ id, done, description }) {
  function deleteTask(id) {
    console.log(id);
  }

  function archiveDoneTask(id) {
    console.log(id);
  }

  return (
    <tr
      className={`mt-4 p-3 
        ${!done ? "bg-slate-200" : "bg-green-200"} 
      flex justify-between items-centers`}
    >
      <td className="flex items-center">
        <Checkbox />
      </td>
      <td className="text-left flex items-center">{description}</td>
      <td className="flex items-center">
        <button
          onClick={() => {
            deleteTask(id);
          }}
        >
          <Trash2 className="h-5 text-red-700" />
        </button>
      </td>
    </tr>
  );
}
