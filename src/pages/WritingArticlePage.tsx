import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { marked } from "marked";

export function WritingArticlePage() {
  const { id } = useParams<{ id: string }>();        // e.g. "test_doc"
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<Record<string, string>>({});

  // 1. Grab all your .md as raw text
  const modules = import.meta.glob<string>(
    "../content/writing/*.md",
    { as: "raw" }
  );

  useEffect(() => {
    if (!id) return;
  
    const key = `../content/writing/${id}.md`;
    const loader = modules[key];
    if (!loader) {
      setError(`No such file: ${id}.md`);
      return;
    }
  
    loader()
      .then((raw) => {
        const match = raw.match(/^---[\s\S]*?---/);
        const metadata: Record<string, string> = {};
  
        if (match) {
          const lines = match[0].split('\n').slice(1, -1);
          for (const line of lines) {
            const [key, ...rest] = line.split(":");
            if (key && rest.length > 0) {
              metadata[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
            }
          }
        }
  
        setMetadata(metadata); // you'll need to add `const [metadata, setMetadata] = useState({})`
        const contentWithoutFrontmatter = raw.replace(/^---[\s\S]*?---/, "").trim();
        setContent(contentWithoutFrontmatter);
      })
      .catch((e) => setError(e.message));
  }, [id, modules]);
  

  return (
    <div className="container py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto mb-6">
        <Link to="/writing" className="text-primary font-medium flex items-center gap-1 mb-8 hover:underline">
          <ChevronLeft size={16} /> Back to Writing
        </Link>

        {metadata.title && (
          <div className="w-full bg-gray-100 border border-gray-300 rounded p-4 mb-6">
            <h1 className="text-2xl font-bold">{metadata.title}</h1>
            <p className="text-sm text-gray-600">
              {metadata.type} &middot; {metadata.date}
            </p>
          </div>
        )}

        <article className="prose prose-lg max-w-none">
          {error   && <p className="text-red-600">Error: {error}</p>}
          {content && (
            <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
          )}
        </article>
      </div>
    </div>
  );
}
