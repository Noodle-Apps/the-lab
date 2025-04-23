// src/pages/PhotographyCollectionPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import fm from "front-matter";

const metadataFiles = import.meta.glob<
  string
>("/src/content/photography/**/[!_]*.md", {
  as: "raw",
  eager: true,
});
const imageFiles = import.meta.glob<string>(
  "/src/content/photography/**/*.jpg",
  {
    as: "url",
    eager: true,
  }
);

export function PhotographyCollectionPage() {
  const { id } = useParams<{ id: string }>();
  const mdPath = `/src/content/photography/${id}/${id}.md`;
  const raw = (metadataFiles as Record<string, string>)[mdPath];

  if (!raw) {
    return <div className="p-8 text-center">Collection “{id}” not found.</div>;
  }

  const { attributes } = fm(raw);
  const images = Object.entries(imageFiles)
    .filter(([path]) => path.startsWith(`/src/content/photography/${id}/`))
    .map(([, url]) => url);

  return (
    <div className="container py-12 px-4 sm:px-6">
      {/* Metadata header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black mb-2">{attributes.title}</h1>
        <p className="text-lg text-muted-foreground mb-1">
          {attributes.description}
        </p>
        <div className="text-sm text-muted-foreground">
          <span>Location: {attributes.location}</span> •{" "}
          <span>
            Date:{" "}
            {new Date(attributes.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>{" "}
          • <span>Type: {attributes.type}</span> •{" "}
          <span>Scale: {attributes.scale}</span>
        </div>
      </div>

      {/* Image gallery */}
      <div
        className="mx-auto"
        style={{
          columnCount: 3,
          columnGap: "1rem",         // horizontal gutter
        }}
      >
        {images.map((src) => (
          <div
            key={src}
            style={{
              breakInside: "avoid",  // don’t split an item
              marginBottom: 9        // zero vertical gap
            }}
          >
            <img
              src={src}
              alt={attributes.title}
              className="w-full block"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
