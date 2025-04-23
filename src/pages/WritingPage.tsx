import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import fm from "front-matter";
import { ScaleBadge, scaleMap, ScaleType } from "@/components/ui/scale-badge";

type WritingItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "article" | "story" | "novel";
  scale: "Dormant" | "Simmering" | "Boiling" | "Overdrive" | "Complete";
};

export function WritingPage() {
  const [items, setItems] = useState<WritingItem[]>([]);

  useEffect(() => {
    // 1. grab all .md as raw text
    const modules = import.meta.glob<string>(
      "../content/writing/*.md",
      { as: "raw" }
    );

    // 2. turn each module into a WritingItem
    Promise.all(
      Object.entries(modules).map(async ([path, loader]) => {
        const raw = await loader();
        const { attributes } = fm(raw);
        const id = path
          .split("/")
          .pop()!
          .replace(/\.md$/, "");

        return {
          id,
          title: attributes.title as string,
          description: attributes.description as string,
          date: attributes.date as string,
          type: attributes.type as WritingItem["type"],
          scale: attributes.scale as string,
        };
      })
    )
      .then((list) =>
        list
          .sort((a, b) => (a.date < b.date ? 1 : -1)) // newest first
      )
      .then(setItems)
      .catch(console.error);
  }, []);

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
        {items.map((item, i) => (
          <Card
            key={item.id}
            className={`mondrian-border bg-white p-6 hover:shadow-xl transition-shadow ${
              i % 3 === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-display font-bold">
                {item.title}
              </h2>
              <div className="flex gap-2">
                <span className="bg-primary text-white px-3 py-1 font-bold uppercase text-sm mondrian-border">
                  {item.type}
                </span>
                <ScaleBadge key={item.scale} type={item.scale as ScaleType} />
              </div>
            </div>
            <p className="text-lg mb-6">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
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
