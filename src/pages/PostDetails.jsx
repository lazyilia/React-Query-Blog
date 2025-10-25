import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/posts";

function PostDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
    enabled: !!id,
  });
  if (isLoading) return <div className="bg-zinc-900 min-h-screen flex items-center justify-center text-gray-100">Loading Post...</div>;
  if (error) return <div  className="bg-zinc-900 min-h-screen flex items-center justify-center text-red-500">Error : {error.message}</div>;
  return (
    <div  className="bg-zinc-900 min-h-screen p-8 text-gray-100">
      <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
      <p className="text-gray-300 text-lg leading-relaxed">{data.body}</p>
    </div>
  );
}

export default PostDetails;
