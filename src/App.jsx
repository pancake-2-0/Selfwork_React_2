import { RouterProvider } from "react-router";
import { UserContextProvider } from "./context/UserContext";
import { useState } from "react";
import router from "./routing/router";
import useFetch from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState();
  const data = useFetch(url, url);

  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>

      <h1 className="text-2xl font-bold flex justify-center mb-3">Titles</h1>
      <div className="flex justify-center gap-4 my-5">
        <button
          className="btn btn-dash btn-primary"
          onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
        >
          Posts
        </button>
        <button
          className="btn btn-dash btn-primary"
          onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
        >
          Users
        </button>
      </div>

      <ul className="menu menu-lg bg-base-200 rounded-box w-auto mx-10">
        {data &&
          data.map((element) => (
            <li key={element.id}>{element.title || element.name}</li>
          ))}
      </ul>
    </>
  );
}

export default App;
