import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import PropTypes from "prop-types";

export default function EntryBar({ onAddTask }) {
  const [entryText, setEntryText] = useState("");

  return (
    <>
      <div className="flex relative w-full gap-2">
        <Textarea
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Your task"
          className="pr-[80px]"
          value={entryText}
        />
        <Button
          onClick={() => {
            if (entryText && entryText.trim()) {
              onAddTask(entryText);
              setEntryText("");
            }
          }}
          className="absolute right-3 bottom-3"
        >
          Add
        </Button>
      </div>
    </>
  );
}

EntryBar.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
