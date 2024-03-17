import Login from "./Login"
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AddCourt from "./AddCourt";




 const Body = () => {
    
  
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path:"/addCourt",
        element:<AddCourt/>
      }
    ]);
  
  
  
    return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
    );
  };
  
  export default Body;