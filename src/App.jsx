import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Main from "./pages";

import "./App.scss";

const router = createBrowserRouter([
   {
      path: "/",
      // element: <Main />,
      // errorElement: <NotFoundPage />,
   },
]);

const App = () => {
   return <RouterProvider router={router} />;
};

export default App;
