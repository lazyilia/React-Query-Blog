const api = "https://dummyjson.com";

export async function fetchPosts({ skip = 0, limit = 10 }) {
  const res = await fetch(`${api}/posts?limit=${limit}&skip=${skip}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data.posts;
}

export async function fetchPostById(id) {
  const res = await fetch(`${api}/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
