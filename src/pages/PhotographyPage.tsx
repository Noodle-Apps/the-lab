import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PhotoCollection {
  id: string;
  title: string;
  description: string;
  date: string;
  imageCount: number;
  coverImage: string;
}

const photoCollections: PhotoCollection[] = [
  {
    id: "beach-sunset",
    title: "Beach Sunset Collection",
    description: "A series of photographs capturing the perfect sunset at various beaches.",
    date: "2025-03-15",
    imageCount: 12,
    coverImage: "https://source.unsplash.com/photo-1482938289607-e9573fc25ebb"
  },
  {
    id: "mountain-view",
    title: "Mountain Views",
    description: "Breathtaking photos from my recent hiking trip in the mountains.",
    date: "2025-02-28",
    imageCount: 8,
    coverImage: "https://source.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: "city-nights",
    title: "City Nights",
    description: "Urban photography exploring the city after dark.",
    date: "2025-04-05",
    imageCount: 15,
    coverImage: "https://source.unsplash.com/photo-1580477667995-2b94f01c9516"
  },
  {
    id: "ocean-waves",
    title: "Ocean Waves",
    description: "Close-up captures of ocean waves in different lighting and weather conditions.",
    date: "2025-01-10",
    imageCount: 9,
    coverImage: "https://source.unsplash.com/photo-1500375592092-40eb2168fd21"
  }
];

export function PhotographyPage() {
  return (
    <div className="container py-12 px-4 sm:px-6">
      <div className="mb-16">
        <h1 className="text-[5rem] font-display font-black tracking-tight mb-6 leading-none">
          <span className="bg-page-photography text-white px-4 py-2 inline-block mondrian-border transform -rotate-2">
            Photography
          </span>
        </h1>
        <p className="text-2xl text-muted-foreground font-display ml-4">
          Collections of photos from various projects and shoots.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {photoCollections.map((collection) => (
          <Card key={collection.id} className="overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="h-48 overflow-hidden">
              <img 
                src={collection.coverImage} 
                alt={collection.title}
                className="w-full h-full object-cover" 
              />
            </div>
            <CardHeader>
              <CardTitle>{collection.title}</CardTitle>
              <CardDescription>{collection.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {collection.imageCount} photos • Last updated: {new Date(collection.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Link to={`/photography/${collection.id}`} className="text-page-photography font-medium hover:underline">
                View Collection →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
