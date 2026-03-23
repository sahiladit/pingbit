import { posts } from "../data/posts";
import BlogCard from "../components/BlogCard";
import { sendSubscription } from "../services/emailService";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  const email = e.target.email.value;

  sendSubscription(email)
    .then(() => {
      alert("Subscribed successfully 🚀");
    })
    .catch(() => {
      alert("Something went wrong");
    });

  e.target.reset();
};
  return (
    <div className="space-y-10">
      {/* HERO SECTION */}
      <section className="text-center py-16 bg-gradient-to-b from-[#0d0d0d] via-[#0f0f0f] to-[#0d0d0d]">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          Pingbit — Tech Unplugged
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Deep dives into AI, Cybersecurity the tech that shapes tomorrow.
        </p>
      </section>

      <section className="text-center py-12 border-t border-gray-800">
  <h2 className="text-2xl font-bold text-green-400 mb-3">
    Stay Updated
  </h2>
  <p className="text-gray-400 mb-6">
    Get notified when a new blog drops.
  </p>
    <p className="text-green-400 mt-3">{message}</p>
  <form 
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row justify-center gap-3"
>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      className="px-4 py-2 rounded-md bg-black border border-gray-700 text-white w-72 focus:outline-none focus:border-green-400"
      required
    />
    <button
      type="submit"
      className="px-6 py-2 bg-green-400 text-black rounded-md font-semibold hover:bg-green-300 transition"
    >
      Subscribe
    </button>
  </form>
</section>
      

      {/* CATEGORIES */}
      <section className="flex flex-wrap justify-center gap-3">
        {["AI", "Cybersecurity", "IoT", "Technology", "Cloud"].map(cat => (
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
