import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader as projectLoader } from "./features/projects/Projects";

import Projects from "./features/projects/Projects";
import Home from "./ui/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Projects />,
          loader: projectLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
