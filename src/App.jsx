import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react"; // ✅ Correct import
import Post from "./pages/Post";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="border-b border-gray-800 pb-4 mb-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-green-400 tracking-tight">pingbit</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <a href="#" className="hover:text-green-400 transition">About</a>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>

      {/* Analytics will now work */}
      <Analytics />

      <footer className="mt-12 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} pingbit — Tech blogs for curious minds.
      </footer>
    </div>
  );
}
