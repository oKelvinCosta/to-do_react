import React from "react";
import Searchbar from "./SearchBar";
import TaskTable from "./TaskTable";
import Feedback from "./Feedback";

export default function TodoList() {
  return (
    <>
      <div className="bg-slate-100 p-6 rounded w-full min-h-[600px]">
        <Searchbar />
        <TaskTable />
        <Feedback />
      </div>
    </>
  );
}
