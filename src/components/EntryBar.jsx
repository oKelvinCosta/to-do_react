import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import PropTypes from "prop-types";

export default function EntryBar({ onAddTask }) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryDescription, setEntryDescription] = useState("");

  return (
    <>
      <div className="flex flex-col relative w-full gap-2">
        <Input
          onChange={(e) => setEntryTitle(e.target.value)}
          placeholder="Title"
          value={entryTitle}
        />
        <Textarea
          onChange={(e) => setEntryDescription(e.target.value)}
          placeholder="Your description"
          className="pr-[80px]"
          value={entryDescription}
        />
        <Button
          onClick={() => {
            if (entryTitle && entryTitle.trim()) {
              onAddTask(entryTitle, entryDescription);
              setEntryTitle("");
              setEntryDescription("");
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
