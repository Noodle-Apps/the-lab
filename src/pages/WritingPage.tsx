import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

interface WritingItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "article" | "story" | "novel";
}

const writingItems: WritingItem[] = [
  {
    id: "novel-draft",
    title: "The Last Algorithm",
    description: "First few chapters of my sci-fi novel about artificial intelligence and the end of programming.",
    date: "2025-02-15",
    type: "novel"
  },
  {
    id: "modern-programming",
    title: "The State of Modern Programming",
    description: "An exploration of current trends in software development and where we're headed.",
    date: "2025-03-21",
    type: "article"
  },
  {
    id: "short-story",
    title: "The Visitor",
    description: "A short story about an unexpected guest and the mysteries they bring.",
    date: "2025-04-10",
    type: "story"
  },
  {
    id: "ai-ethics",
    title: "Ethics in AI Development",
    description: "My thoughts on responsible development of artificial intelligence systems.",
    date: "2025-04-02",
    type: "article"
  }
];

export function WritingPage() {
  return (
    <div className="container py-12 px-4 sm:px-6">
      <div className="mb-16">
        <h1 className="text-[5rem] font-display font-black tracking-tight mb-6 leading-none">
          <span className="bg-primary text-white px-4 py-2 inline-block mondrian-border transform -rotate-2">
            Writing
          </span>
        </h1>
        <p className="text-2xl text-muted-foreground font-display ml-4">
          Articles, essays, and fiction writing projects in progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {writingItems.map((item, index) => (
          <Card 
            key={item.id} 
            className={`mondrian-border bg-white p-6 hover:shadow-xl transition-shadow
              ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-display font-bold">{item.title}</h2>
              <span className="bg-primary text-white px-3 py-1 font-bold uppercase text-sm mondrian-border">
                {item.type}
              </span>
            </div>
            <p className="text-lg mb-6">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <Link 
                to={`/writing/${item.id}`} 
                className="bg-black text-white px-4 py-2 font-bold hover:bg-primary transition-colors mondrian-border"
              >
                Read More →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
