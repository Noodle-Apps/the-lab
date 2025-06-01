import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { loadPhotoCollections } from "@/utils/loadPhotoCollections";
import { ScaleBadge, ScaleType, scaleMap } from "@/components/ui/scale-badge";

interface PhotoCollection {
  id: string;
  title: string;
  description: string;
  date: string;
  imageCount: number;
  coverImage: string;
  scale: string;
}

const photoCollections = loadPhotoCollections();

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
          Collections of photos from various projects and shoots. Want to see more? Check out @noodlesnapz on Instagram.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {photoCollections.map((collection) => (
          <Card key={collection.id} className="overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="h-72 overflow-hidden">
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
