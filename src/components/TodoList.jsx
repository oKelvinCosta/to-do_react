import React from "react";
import Searchbar from "./SearchBar";
import TaskTable from "./TaskTable";

export default function TodoList() {
  return (
    <>
      <Searchbar />
      <TaskTable />
    </>
  );
}
