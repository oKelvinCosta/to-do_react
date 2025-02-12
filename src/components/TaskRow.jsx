import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

export default function TaskRow() {
  return (
    <tr className="mt-4 p-3 bg-slate-200 flex justify-between items-centers">
      <td className="flex items-center">
        <Checkbox />
      </td>
      <td className="text-left flex items-center">Estudar Reack</td>
      <td className="flex items-center">
        <button>
          <Trash2 className="h-5 text-red-700" />
        </button>
      </td>
    </tr>
  );
}
