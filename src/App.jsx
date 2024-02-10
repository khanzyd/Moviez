import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { loader as heroBannerLoader } from "./Pages/Home/Home";
import { loader as movieDetailLoader } from "./Pages/movieDetail/MovieDetail" 
import Layout from "./components/Layout";
import Home from "./Pages/Home/Home";
import MovieDetail from "./Pages/movieDetail/MovieDetail";

function App() {
  const allRoutes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={heroBannerLoader} />
      <Route
        path="explore/:movieId"
        loader={movieDetailLoader}
        element={<MovieDetail />}
      />
    </Route>
  );
  const router = createBrowserRouter(allRoutes);

  return (
    <>
      <div className="w-full bg-indigo-950">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
