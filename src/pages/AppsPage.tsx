
import React from "react";
import { AppWindow, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AppProject {
  id: string;
  title: string;
  description: string;
  date: string;
  techs: string[];
  githubUrl: string;
  liveUrl?: string;
}

const appProjects: AppProject[] = [
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A weather application built with React that displays current weather and forecasts using the OpenWeather API.",
    date: "2025-03-15",
    techs: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-dashboard-demo.netlify.app"
  },
  {
    id: "markdown-editor",
    title: "Markdown Editor",
    description: "A simple markdown editor with live preview functionality, supporting common markdown syntax.",
    date: "2025-02-10",
    techs: ["Vue.js", "Marked", "SCSS"],
    githubUrl: "https://github.com/yourusername/markdown-editor"
  },
  {
    id: "task-manager",
    title: "Task Manager API",
    description: "A RESTful API for managing tasks and projects, with authentication and user permissions.",
    date: "2025-01-25",
    techs: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/yourusername/task-manager-api"
  },
  {
    id: "portfolio-generator",
    title: "Developer Portfolio Generator",
    description: "A tool that generates a personalized portfolio website based on your GitHub profile information.",
    date: "2025-04-05",
    techs: ["React", "GitHub API", "Netlify Functions"],
    githubUrl: "https://github.com/yourusername/portfolio-generator",
    liveUrl: "https://dev-portfolio-gen.netlify.app"
  }
];

export function AppsPage() {
  return (
    <div className="container py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold font-display tracking-tight sm:text-5xl flex justify-center items-center gap-3">
          <AppWindow className="text-page-apps" />
          <span className="bg-page-apps text-white px-4 py-2 inline-block mondrian-border transform -rotate-2">
            Apps
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Web applications and coding projects in development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {appProjects.map((app) => (
          <Card key={app.id} className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardHeader>
              <CardTitle>{app.title}</CardTitle>
              <CardDescription>{app.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4">
                Last updated: {new Date(app.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex flex-wrap gap-2">
                {app.techs.map((tech) => (
                  <span key={tech} className="bg-secondary text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <a 
                href={app.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-page-apps font-medium hover:underline inline-flex items-center gap-1"
              >
                <Github size={16} />
                GitHub Repo
              </a>
              {app.liveUrl && (
                <a 
                  href={app.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-page-apps font-medium hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
