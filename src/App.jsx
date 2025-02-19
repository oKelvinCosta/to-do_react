import "@/assets/css/index.css";
import reactLogo from "@/assets/react.svg";

import TaskPage from "./pages/TaskPage.jsx";
import TodoListPage from "./pages/TodoListPage.jsx";
import Bg from "./components/Bg.jsx";
import BoxApp from "./components/BoxApp.jsx";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <TodoListPage />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
];

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <TodoListPage />,
//   },
//   {
//     path: "/task",
//     element: <TaskPage />,
//   },
// ]);

function App() {
  return (
    <>
      <Bg>
        <img src={reactLogo} className="logo" alt="React logo" />
        <BoxApp>
          <Router>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Router>

          {/* <RouterProvider router={router} /> */}
        </BoxApp>
      </Bg>
    </>
  );
}

export default App;
