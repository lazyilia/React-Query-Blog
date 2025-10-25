import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/posts";
import { Link } from "react-router-dom";
import { useState } from "react";

function Posts() {
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts", skip],
    queryFn: () => fetchPosts({ skip, limit }),
    keepPreviousData: true,
  });

  if (isLoading)
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center text-gray-100">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center text-red-500">
        Error : {error.message}
      </div>
    );
  return (
    <div className="bg-zinc-900 min-h-screen p-8 text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Posts</h1>
      <ul className="space-y-4">
        {data.slice(0, 29).map((post) => (
          <li
            key={post.id}
            className="p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          >
            <Link
              to={`/posts/${post.id}`}
              className="text-blue-400 font-semibold hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setSkip((prev) => prev + limit)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Load More
      </button>
    </div>
  );
}

export default Posts;
