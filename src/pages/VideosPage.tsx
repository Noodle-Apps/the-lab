import React from "react";
import { Link } from "react-router-dom";
import { Video, PlayCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface VideoProject {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  thumbnailUrl: string;
}

const videoProjects: VideoProject[] = [
  {
    id: "echoes",
    title: "Short Film: 'Echoes'",
    description: "A short film exploring memory and loss through the story of a woman revisiting her childhood home.",
    date: "2025-02-25",
    duration: "12:34",
    thumbnailUrl: "https://source.unsplash.com/photo-1518877593221-1f28583780b4"
  },
  {
    id: "city-timelapse",
    title: "City Timelapse",
    description: "A day to night timelapse of the city skyline, showing the urban rhythm over 24 hours.",
    date: "2025-03-10",
    duration: "3:45",
    thumbnailUrl: "https://source.unsplash.com/photo-1477959858617-67f85cf4f1df"
  },
  {
    id: "nature-documentary",
    title: "Micro Nature",
    description: "A mini-documentary about the hidden world of insects and small creatures in a garden ecosystem.",
    date: "2025-01-15",
    duration: "18:22",
    thumbnailUrl: "https://source.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  {
    id: "animation-test",
    title: "Animation Test",
    description: "Experimental animation using mixed media and stop motion techniques.",
    date: "2025-04-01",
    duration: "2:05",
    thumbnailUrl: "https://source.unsplash.com/photo-1518844927079-5le31445c799"
  }
];

export function VideosPage() {
  return (
    <div className="container py-12 px-4 sm:px-6">
      <div className="mb-16">
        <h1 className="text-[5rem] font-display font-black tracking-tight mb-6 leading-none">
          <span className="bg-page-videos text-white px-4 py-2 inline-block mondrian-border transform -rotate-2">
            Videos
          </span>
        </h1>
        <p className="text-2xl text-muted-foreground font-display ml-4">
          Short films, documentaries, and other video projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {videoProjects.map((video) => (
          <Card key={video.id} className="overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <PlayCircle className="text-white h-12 w-12 opacity-80" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <CardHeader>
              <CardTitle>{video.title}</CardTitle>
              <CardDescription>{video.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Published: {new Date(video.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Link to={`/videos/${video.id}`} className="text-page-videos font-medium hover:underline">
                Watch Video →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
