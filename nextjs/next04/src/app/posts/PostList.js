"use client";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
// export const postApi = `${process.env.NEXT_PUBLIC_SERVER_API}/posts`;
export const postApi = `https://jsonplaceholder.typicode.com/posts`;
const PostList = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(postApi, fetcher, {
    // refreshInterval: 2000,
    // revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshWhenOffline: true,
  });

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <div>Lỗi rồi hehehe</div>;

  //   console.log(process.env.NEXT_PUBLIC_SERVER_API);
  return (
    <div>
      <h1>Posts</h1>
      {posts?.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};
export default PostList;
