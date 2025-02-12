import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function SearchBar() {
  const [entryText, setEntryText] = useState(null);

  function addTask() {
    // recebe as tasks
    // adiciona no final
    // atualiza o estado
    // salva o arquivo

    console.log(entryText);
  }

  return (
    <>
      <div className="flex relative w-full gap-2">
        <Textarea
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Your task"
          className="pr-[80px]"
        />
        <Button onClick={() => addTask()} className="absolute right-3 bottom-3">
          Add
        </Button>
      </div>
    </>
  );
}
