import { Link, useLoaderData } from "react-router";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <h1 className="text-2xl font-bold flex justify-center mb-3">Posts</h1>
      <div className="flex justify-center items-center">
        <ul className="menu menu-lg bg-base-200 rounded-box w-auto mx-10">
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
