"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Educational Credentials with Blockchain",
    excerpt: "How blockchain technology is transforming the way we verify and manage academic credentials...",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200",
    date: "April 15, 2024",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    id: 2,
    title: "The Future of Digital Certificates in Education",
    excerpt:
      "Exploring the impact of digital certificates and how they're making credential verification more secure and efficient...",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    date: "April 12, 2024",
    readTime: "4 min read",
    category: "Education",
  },
  {
    id: 3,
    title: "Securing Academic Records: A Blockchain Solution",
    excerpt:
      "Understanding how blockchain ensures tamper-proof academic records and simplifies verification processes...",
    image: "https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?q=80&w=1200",
    date: "April 10, 2024",
    readTime: "6 min read",
    category: "Security",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Eduresultchain Logo" width={50} height={50} className="mr-3" />
              <h1 className="text-2xl font-bold">Eduresultchain Blog</h1>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-emerald-600 text-white placeholder-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"
              alt="Featured post"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-emerald-900 mix-blend-multiply" />
          </div>
          <div className="relative px-8 py-24 sm:px-12 sm:py-32">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                Featured
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                The Evolution of Educational Verification Systems
              </h1>
              <p className="mt-6 text-xl text-gray-100">
                Discover how blockchain technology is revolutionizing the way educational institutions verify and manage
                student credentials.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block bg-white px-4 py-2 rounded-md text-emerald-700 font-medium hover:bg-emerald-50 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105"
            >
              <div className="flex-shrink-0 h-48 relative">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    {post.category}
                  </span>
                  <a href="#" className="block mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
