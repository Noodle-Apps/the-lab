
import React from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { FileText, Camera, Video, AppWindow } from "lucide-react";

interface FeaturedItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  category: string;
}

const scale = [
  {
    name: "Dormant",
    bg: "bg-gray-600",
    tooltip: "This is a dormant project that I haven't worked on in a while."
  },
  {
    name: "Simmering",
    bg: "bg-yellow-600",
    tooltip: "This project is in the works but not actively being worked on."
  },
  {
    name: "Boiling",
    bg: "bg-orange-600",
    tooltip: "This project is actively being worked on."
  },
  {
    name: "Overdrive",
    bg: "bg-red-600",
    tooltip: "This project has my full attention and is in high gear."
  },
  {
    name: "Complete",
    bg: "bg-green-600",
    tooltip: "This project is complete and no longer being worked on."
  },
]

function FeaturedItem({ title, description, icon, link, category }: FeaturedItemProps) {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
          {icon}
          <span>{category}</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
          {/* Placeholder for featured content preview */}
          Preview
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Link to={link} className="text-primary font-medium hover:underline">
          View Project →
        </Link>
      </CardFooter>
    </Card>
  );
}

export function HomePage() {
  return (
    <div className="container py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold font-display tracking-tight sm:text-5xl px-5 py-3 border-4 border-solid border-black w-fit">The Lab</h1>
        <p className="text-xl text-muted-foreground">
          A place for all my creative work across multiple mediums.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="text-2xl font-bold">The Scale</h1>
        <p className="text-lg text-muted-foreground text-center">As I move so frequently from one project to another, I've decided to embrace the chaos. <br/> In order to track that... we have the scale:</p>
      </div>

      <div className="flex gap-3 justify-center mb-12">
        {scale.map((s, i) => (
          <span
            key={i}
            title={scale[i].tooltip}
            className={`${scale[i].bg} text-white px-3 py-1 font-bold uppercase text-sm mondrian-border cursor-pointer`}
          >
            {scale[i].name}
          </span>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeaturedItem 
            title="My Novel Test" 
            description="The first few chapters of my upcoming sci-fi novel." 
            icon={<FileText size={16} />} 
            link="/writing/test_doc" 
            category="Writing"
          />
          <FeaturedItem 
            title="Beach Sunset Collection" 
            description="A series of photographs capturing the perfect sunset." 
            icon={<Camera size={16} />} 
            link="/photography/beach-sunset" 
            category="Photography"
          />
          <FeaturedItem 
            title="Short Film: 'Echoes'" 
            description="My latest short film exploring memory and loss." 
            icon={<Video size={16} />} 
            link="/videos/echoes" 
            category="Videos"
          />
          <FeaturedItem 
            title="Weather Dashboard App" 
            description="A simple weather app built with React and OpenWeather API." 
            icon={<AppWindow size={16} />} 
            link="/apps/weather-dashboard" 
            category="Apps"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="text-primary" />
            <h2 className="text-xl font-bold font-display">Writing</h2>
          </div>
          <p className="text-muted-foreground">
            Articles, essays, and fiction writing projects in progress.
          </p>
          <Link to="/writing" className="text-primary font-medium hover:underline block">
            View all writing →
          </Link>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Camera className="text-primary" />
            <h2 className="text-xl font-bold font-display">Photography</h2>
          </div>
          <p className="text-muted-foreground">
            Collections of photos from various projects and shoots.
          </p>
          <Link to="/photography" className="text-primary font-medium hover:underline block">
            View all photography →
          </Link>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Video className="text-primary" />
            <h2 className="text-xl font-bold font-display">Videos</h2>
          </div>
          <p className="text-muted-foreground">
            Short films, documentaries, and other video projects.
          </p>
          <Link to="/videos" className="text-primary font-medium hover:underline block">
            View all videos →
          </Link>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AppWindow className="text-primary" />
            <h2 className="text-xl font-bold font-display">Apps</h2>
          </div>
          <p className="text-muted-foreground">
            Web applications and coding projects in development.
          </p>
          <Link to="/apps" className="text-primary font-medium hover:underline block">
            View all apps →
          </Link>
        </section>
      </div>
    </div>
  );
}
