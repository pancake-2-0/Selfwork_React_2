import { useLoaderData } from "react-router";

export default function Detail() {
  const post = useLoaderData();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" card bg-neutral text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
