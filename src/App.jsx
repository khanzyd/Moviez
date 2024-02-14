import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home,{ loader as heroBannerLoader } from "./Pages/Home.jsx";
import MovieDetail,{ loader as movieDetailLoader } from "./Pages/MovieDetail.jsx";
import Layout from "./components/Layout";
import SearchResult,{ loader as searchResultLoader } from "./Pages/SearchResult.jsx";

function App() {
  // ?query=wonka&include_adult=false&language=en-US&page=1'
  const allRoutes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} loader={heroBannerLoader} />
      <Route path="search/:movie" element={<SearchResult/>} loader={searchResultLoader}/>
      <Route
        path=":type/:id"
        loader={movieDetailLoader}
        element={<MovieDetail/>}
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
