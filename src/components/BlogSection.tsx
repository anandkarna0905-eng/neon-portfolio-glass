import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring large-scale React applications with maintainable code architecture.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "React",
    gradient: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that will shape the future of web development in 2025 and beyond.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Tech Trends",
    gradient: "from-neon-purple/20 to-neon-pink/20",
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics with practical examples to level up your type-safe coding skills.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "TypeScript",
    gradient: "from-neon-pink/20 to-neon-cyan/20",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-neon-cyan text-sm uppercase tracking-[0.3em] mb-4 font-mono">
            Latest insights
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Blog <span className="gradient-text">Posts</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-6" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group glass-hover rounded-2xl overflow-hidden cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Post Header/Image */}
              <div className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-background/50 backdrop-blur-sm text-neon-cyan border border-neon-cyan/30">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl mb-3 group-hover:text-neon-cyan transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-neon-cyan text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors font-medium"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
