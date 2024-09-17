import path from "path";
import "./App.css";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacterDetailPage from "./pages/CharacterDetail";
import LayoutPage from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <CharacterDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
