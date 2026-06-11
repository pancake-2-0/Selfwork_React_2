import { RouterProvider } from "react-router";
import { UserContextProvider } from "./context/UserContext";
import router from "./routing/router";

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
