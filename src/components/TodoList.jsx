import React from "react";
import Searchbar from "./SearchBar";
import TaskTable from "./TaskTable";

export default function TodoList() {
  return (
    <>
      <div className="bg-slate-100 p-6 rounded">
        <Searchbar />
        <TaskTable />
      </div>
    </>
  );
}
