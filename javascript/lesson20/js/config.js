export const config = async () => {
  const response = await fetch(` https://zljcpr-8080.csb.app/posts`);
  const post = await response.json();
  console.log(post);
};
