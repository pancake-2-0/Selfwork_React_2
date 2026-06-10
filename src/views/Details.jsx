import { useLoaderData } from "react-router";

export default function Detail() {
  const post = useLoaderData();

  return (
    <>
      <h1>Detail</h1>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
}
