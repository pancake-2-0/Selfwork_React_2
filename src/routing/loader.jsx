export const postsLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return json;
};

export const postDetailLoader = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  return json;
};
