import { createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import MovieVideo from "./MovieVideo";

const Body = () => {

    const dispath = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/movie/:id",
            element: <MovieVideo />
        }
    ])
    
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;