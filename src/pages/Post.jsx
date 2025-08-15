import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <p className="text-red-400">Post not found.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-400 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-300 space-y-4" />
      <Link to="/" className="mt-6 inline-block text-green-400 hover:underline">← Back to Home</Link>
    </div>
  );
}
