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

      <h1>Titles</h1>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
      >
        Posts
      </button>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
      >
        Users
      </button>
      <ul>
        {data &&
          data.map((element) => (
            <li key={element.id}>{element.title || element.name}</li>
          ))}
      </ul>
    </>
  );
}

export default App;
