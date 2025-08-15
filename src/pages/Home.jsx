import { posts } from "../data/posts";
import BlogCard from "../components/BlogCard";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* HERO SECTION */}
      <section className="text-center py-16 bg-gradient-to-b from-[#0d0d0d] via-[#0f0f0f] to-[#0d0d0d]">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          Pingbit — Tech Unplugged
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Deep dives into AI, Cybersecurity, Quantum Computing, and the tech that shapes tomorrow.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="flex flex-wrap justify-center gap-3">
        {["AI", "Cybersecurity", "IoT", "Quantum", "Cloud"].map(cat => (
          <span
            key={cat}
            className="px-4 py-1 border border-green-400 text-green-400 text-sm rounded-full hover:bg-green-400 hover:text-black transition"
          >
            {cat}
          </span>
        ))}
      </section>

      {/* BLOG CARDS */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}
