import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Home from "./Pages/Home";

function App() {
  const allRoutes = createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<HeroSection />} />
    </Route>
  );
  const router = createBrowserRouter(allRoutes);

  return (
    <>
      <div className="h-full w-full">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
