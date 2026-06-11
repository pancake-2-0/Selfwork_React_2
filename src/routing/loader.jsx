export const postsLoader = async () => {
  const post_response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const json = await post_response.json();
  return json;
};

export const postDetailLoader = async ({ params }) => {
  const detail_response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const json = await detail_response.json();
  return json;
};
