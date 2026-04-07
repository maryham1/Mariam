import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader as projectLoader } from "./features/Projects/Projects";

import Home from "./ui/Home";
import { ScrollContextComponent } from "./features/Context/ScrollContext";
import Projects from "./features/Projects/Projects";

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
  return (
    <ScrollContextComponent>
      <RouterProvider router={router} />;
    </ScrollContextComponent>
  );
}

export default App;
