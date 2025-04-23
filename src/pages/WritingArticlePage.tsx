
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function WritingArticlePage() {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch the specific article based on the ID
  // For now, we'll just show a sample article
  
  return (
    <div className="container py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto mb-6">
        <Link to="/writing" className="text-primary font-medium flex items-center gap-1 mb-8 hover:underline">
          <ChevronLeft size={16} />
          Back to Writing
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold font-display mb-4">The State of Modern Programming</h1>
            <div className="text-muted-foreground">
              Posted on April 21, 2025
            </div>
          </header>
          
          <p className="lead text-xl mb-6">
            Programming has evolved dramatically over the last decade, with new tools and paradigms reshaping how we build software. This article explores current trends and where we might be headed.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">The Rise of AI-Assisted Development</h2>
          
          <p>
            Perhaps the most transformative change in recent years has been the introduction of AI-powered coding assistants. These tools can now generate entire functions, debug complex issues, and even design components based on natural language descriptions.
          </p>
          
          <p>
            While still not perfect, they've dramatically increased developer productivity and lowered the barrier to entry for newcomers to the field. The question now isn't whether to use AI assistance, but how to most effectively integrate it into established workflows.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Type Systems Everywhere</h2>
          
          <p>
            The adoption of TypeScript marked a turning point for JavaScript development, but it was just the beginning. Type systems are now becoming standard across languages that previously prided themselves on dynamic typing.
          </p>
          
          <p>
            Python's type hints, Ruby's RBS, and PHP's strict typing mode all reflect a growing consensus: the benefits of static type checking outweigh the initial development overhead for most projects of significant scale.
          </p>
          
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
            <code>
{`// TypeScript example
interface User {
  id: string;
  name: string;
  email: string;
  settings: UserSettings;
}

function updateUserEmail(user: User, newEmail: string): User {
  return {
    ...user,
    email: newEmail
  };
}`}
            </code>
          </pre>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">The Serverless Evolution</h2>
          
          <p>
            Serverless architectures have matured beyond simple function execution to encompass entire application stacks. Developers can now build complex systems without maintaining traditional server infrastructure.
          </p>
          
          <p>
            This paradigm shift has democratized backend development and enabled smaller teams to build and scale solutions that would have previously required dedicated DevOps expertise.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
          
          <p>
            As we look to the future, several emerging trends are worth watching:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>WASM becoming a universal runtime for high-performance web applications</li>
            <li>Low-code platforms evolving to support more complex development scenarios</li>
            <li>AR/VR development tools becoming more accessible to mainstream developers</li>
            <li>Specialized AI models trained specifically for code generation and optimization</li>
          </ul>
          
          <p className="mt-6">
            The pace of change in software development continues to accelerate, but the fundamentals remain: writing clear, maintainable code that solves real problems for users.
          </p>
          
          <div className="border-t border-gray-200 mt-8 pt-6">
            <p className="italic text-muted-foreground">
              This article is a work in progress. Check back for updates as I continue to explore this topic.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
