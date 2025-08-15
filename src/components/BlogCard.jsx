import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ post }) {
  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 shadow-lg hover:shadow-green-500/20 hover:border-green-400 transition">
      <Link to={`/post/${post.id}`}>
        <h2 className="text-xl font-semibold mb-2 text-green-400 hover:underline">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-gray-400 mb-3">{post.date}</p>
      <p className="text-gray-300 mb-4">{post.description}</p>
      <Link
        to={`/post/${post.id}`}
        className="inline-flex items-center gap-1 text-green-400 hover:underline text-sm"
      >
        Read More <FaArrowRight size={12} />
      </Link>
    </div>
  );
}
