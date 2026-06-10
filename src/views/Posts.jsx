import { Link, useLoaderData } from "react-router";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
