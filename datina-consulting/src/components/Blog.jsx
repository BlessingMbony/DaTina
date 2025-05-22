import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Data Analytics in 2025",
    category: "AI & Analytics",
    date: "May 15, 2025",
    readTime: "5 min read",
    excerpt: "Discover how DaTina's AI-powered analytics solutions are helping businesses make faster, more accurate decisions with real-time data processing.",
    imageUrl: "https://readdy.ai/api/search-image?query=futuristic%20data%20visualization%20dashboard%20with%20AI%20integration%2C%20showing%20machine%20learning%20algorithms%20processing%20real-time%20data%20streams%20with%20modern%20tech%20interface&width=800&height=400&seq=10&orientation=landscape",
    link: "/blog/ai-revolutionizing-data-analytics"
  },
  {
    id: 2,
    title: "Digital Marketing Transformation: A Data-Driven Approach",
    category: "Digital Marketing",
    date: "May 12, 2025",
    readTime: "4 min read",
    excerpt: "Learn how DaTina's digital marketing solutions combine data analytics with AI to create highly targeted and effective marketing campaigns.",
    imageUrl: "https://readdy.ai/api/search-image?query=digital%20marketing%20analytics%20dashboard%20showing%20campaign%20performance%20metrics%20social%20media%20engagement%20and%20conversion%20rates%20with%20modern%20interface&width=800&height=400&seq=11&orientation=landscape",
    link: "/blog/digital-marketing-transformation"
  },
  {
    id: 3,
    title: "Business Process Automation: The Future of Efficiency",
    category: "Automation",
    date: "May 10, 2025",
    readTime: "6 min read",
    excerpt: "Explore how DaTina's automation solutions are helping businesses streamline operations and increase productivity through intelligent process optimization.",
    imageUrl: "https://readdy.ai/api/search-image?query=business%20process%20automation%20workflow%20diagram%20with%20robotic%20process%20automation%20and%20AI%20integration%20modern%20corporate%20setting&width=800&height=400&seq=12&orientation=landscape",
    link: "/blog/business-process-automation"
  },
  {
    id: 4,
    title: "Customer Relations in the Age of AI",
    category: "CRM",
    date: "May 8, 2025",
    readTime: "4 min read",
    excerpt: "See how DaTina's AI-powered CRM solutions are transforming customer relationships through predictive analytics and personalized engagement.",
    imageUrl: "https://readdy.ai/api/search-image?query=customer%20relationship%20management%20dashboard%20showing%20AI%20powered%20customer%20insights%20and%20engagement%20metrics%20with%20modern%20interface&width=800&height=400&seq=13&orientation=landscape",
    link: "/blog/customer-relations-ai"
  },
  {
    id: 5,
    title: "The Role of Big Data in Strategic Decision Making",
    category: "AI & Analytics",
    date: "May 5, 2025",
    readTime: "7 min read",
    excerpt: "Understand how big data analytics can provide valuable insights for strategic decision making and long-term business planning.",
    imageUrl: "https://readdy.ai/api/search-image?query=big%20data%20visualization%20with%20business%20executives%20making%20strategic%20decisions%20based%20on%20analytics%20dashboard%20in%20modern%20corporate%20boardroom&width=800&height=400&seq=14&orientation=landscape",
    link: "/blog/big-data-strategic-decisions"
  },
  {
    id: 6,
    title: "Enhancing E-commerce with Predictive Analytics",
    category: "Digital Marketing",
    date: "May 3, 2025",
    readTime: "5 min read",
    excerpt: "Learn how predictive analytics can help e-commerce businesses anticipate customer needs and optimize their sales strategies.",
    imageUrl: "https://readdy.ai/api/search-image?query=ecommerce%20analytics%20dashboard%20showing%20predictive%20customer%20behavior%20patterns%20and%20sales%20forecasting%20with%20modern%20interface&width=800&height=400&seq=15&orientation=landscape",
    link: "/blog/ecommerce-predictive-analytics"
  }
];

export default function Blog() {
  const [filter, setFilter] = useState('all');
  const categories = ['AI & Analytics', 'Digital Marketing', 'Automation', 'CRM'];

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Our Blog</h1>
      <p className="text-gray-400 mb-8 text-center text-lg">
        Insights and perspectives on data analytics, business intelligence, and more
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-all ${
              filter === cat ? 'bg-cyan-500 text-white border-cyan-400' : 'text-gray-300 border-gray-700 hover:bg-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <div key={post.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
              <p className="text-sm text-gray-400 mb-2">
                {post.date} • {post.readTime} • {post.category}
              </p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-cyan-400 hover:underline font-medium">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
