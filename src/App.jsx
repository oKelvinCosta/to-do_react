import reactLogo from "@/assets/react.svg";
import "./App.css";
import TodoList from "@/components/TodoList";

function App() {
  return (
    <>
      <div className="bg-indigo-500 flex items-center justify-center h-screen">
        <div className="container max-w-[580px] mx-auto px-3 flex flex-col items-center justify-center">
          <img src={reactLogo} className="logo" alt="React logo" />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
