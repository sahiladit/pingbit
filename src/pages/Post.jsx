import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { Helmet } from "react-helmet";

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p className="text-gray-300">Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* SEO */}
      <Helmet>
        <title>{post.title} | Pingbit</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": [post.image],
            "author": { "@type": "Person", "name": "Pingbit" },
            "publisher": {
              "@type": "Organization",
              "name": "Pingbit",
              "logo": {
                "@type": "ImageObject",
                "url": "https://via.placeholder.com/150?text=Pingbit"
              }
            },
            "datePublished": post.date
          })}
        </script>
      </Helmet>

      {/* Blog Content */}
      <h1 className="text-3xl font-bold text-green-400">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
