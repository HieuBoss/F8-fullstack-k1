import PostDetail from "./PostDetail";

const getPostDetail = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
};

const Detail = async ({ params }) => {
  const { id } = params;
  const data = await getPostDetail(id);
  console.log(data);
  return <PostDetail {...data} />;
};
export default Detail;
