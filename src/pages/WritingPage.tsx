
import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold font-display tracking-tight sm:text-5xl flex justify-center items-center gap-3">
          <FileText className="text-primary" />
          Writing
        </h1>
        <p className="text-xl text-muted-foreground">
          Articles, essays, and fiction writing projects in progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {writingItems.map((item) => (
          <Card key={item.id} className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{item.title}</CardTitle>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Last updated: {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Link to={`/writing/${item.id}`} className="text-primary font-medium hover:underline">
                Read More →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
