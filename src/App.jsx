import "@/assets/css/index.css";
import reactLogo from "@/assets/react.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TodoListPage from "./pages/TodoListPage.jsx";
import Bg from "./components/Bg.jsx";
import BoxApp from "./components/BoxApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoListPage />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

function App() {
  return (
    <>
      <Bg>
        <img src={reactLogo} className="logo" alt="React logo" />
        <BoxApp>
          <RouterProvider router={router} />
        </BoxApp>
      </Bg>
    </>
  );
}

export default App;
