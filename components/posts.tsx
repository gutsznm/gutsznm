"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Post {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  thumbnail?: string;
  description?: string;
}

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  thumbnail: string;
  categories: string[];
  description: string;
  content: string;
  enclosure: {
    link: string;
    type: string;
    length: number;
  };
  guid: string;
}

interface RSSResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: RSSItem[];
}

const getFallbackPosts = (): Post[] => {
  return [
    {
      title: "Sorry for the inconvenience, but it seems that the Medium feed is currently unavailable.",
      link: "#",
      pubDate: "N/A",
      author: "Deni Sahendra",
      thumbnail: "https://via.placeholder.com/150",
      description: "Please check back later or visit my Medium profile directly for the latest articles.",
    },
    
  ];
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@denisahendra"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: RSSResponse = await response.json();
        
        if (data && data.items && Array.isArray(data.items) && data.items.length > 0) {
          const formattedPosts: Post[] = data.items.map((item: RSSItem) => ({
            title: item.title || "Untitled",
            link: item.link || "#",
            pubDate: item.pubDate 
              ? new Date(item.pubDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Unknown date",
            author: item.author || "Deni Sahendra",
            thumbnail: item.thumbnail || item.enclosure?.link || "",
            description: item.description 
              ? item.description.replace(/<[^>]*>/g, "").slice(0, 120) + "..."
              : "",
          }));
          setPosts(formattedPosts);
        } else {
          setPosts(getFallbackPosts());
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
        setPosts(getFallbackPosts());
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-8 border-t border-border/40">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="h-6 w-48 bg-muted/20 rounded animate-pulse mx-auto"></div>
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border border-border/40 rounded-lg animate-pulse">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-muted/20 rounded flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-muted/20 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-muted/20 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-8 border-t border-border/40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-xl sm:text-2xl font-light tracking-tight">
            Recent Articles
          </h2>
        </div>

        <div className="space-y-4">
          {posts.slice(0, 5).map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group p-4 border border-border/40 hover:border-border rounded-lg transition-all hover:bg-card/20"
            >
              <div className="flex gap-4">
                {post.thumbnail && (
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-md overflow-hidden bg-muted/20">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 96px, 112px"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground/50">
                      {post.pubDate}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-medium transition-colors line-clamp-2 text-muted-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  
                  {post.description && (
                    <p className="text-xs text-muted-foreground/70 mt-1 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                  <span className="text-xs text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors inline-block mt-2">
                    Read more
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://medium.com/@denisahendra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            More on Medium
          </a>
        </div>
      </div>
    </section>
  );
}