export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-green-400">About Me</h1>
      <p className="text-gray-300 text-lg leading-relaxed">
        Hi, I’m <span className="font-semibold">Sahil Adit</span>. Welcome to <span className="font-semibold text-green-400">Pingbit</span>, 
        my personal tech blog where I share insights, research breakthroughs, and trending topics in technology.
      </p>

      <h2 className="text-2xl font-bold text-green-400">Contact</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        You can reach me via email:{" "}
        <a 
          href="mailto:sahiladit17@gmail.com" 
          className="text-green-400 underline hover:text-green-300"
        >
          sahiladit2004@gmail.com
        </a>
      </p>

      <h2 className="text-2xl font-bold text-green-400">About Pingbit</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        Pingbit is a platform for tech enthusiasts, researchers, and students who want to stay updated on the latest 
        developments in algorithms, software, AI, and other emerging technologies. The goal is to make complex 
        technical content easy to understand and accessible.
      </p>
    </div>
  );
}
