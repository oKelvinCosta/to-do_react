import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Searchbar from "./components/SearchBar";
import TaskTable from "./components/TaskTable";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="container">
        <TodoList />
      </div>
    </>
  );
}

export default App;
