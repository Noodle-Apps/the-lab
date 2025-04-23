
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

function FeaturedItem({ title, description, icon, link, category, pageTheme }: { 
  title: string, 
  description: string, 
  icon: React.ReactNode, 
  link: string, 
  category: string,
  pageTheme: string
}) {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
      <CardHeader>
        <div className={`flex items-center gap-2 text-sm font-medium text-${pageTheme} mb-2`}>
          {icon}
          <span>{category}</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
          Preview
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Link 
          to={link} 
          className={`bg-page-${pageTheme} text-page-${pageTheme}-foreground px-4 py-2 font-bold hover:opacity-90 transition-opacity mondrian-border`}
        >
          View Project →
        </Link>
      </CardFooter>
    </Card>
  );
}

export function HomePage() {
  return (
    <div className="container py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold font-display tracking-tight sm:text-5xl">The Lab</h1>
        <p className="text-xl text-muted-foreground">
          A place for all my in-progress creative work across multiple mediums.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeaturedItem 
            title="My Novel Draft" 
            description="The first few chapters of my upcoming sci-fi novel." 
            icon={<FileText size={16} />} 
            link="/writing/novel-draft" 
            category="Writing"
            pageTheme="writing"
          />
          <FeaturedItem 
            title="Beach Sunset Collection" 
            description="A series of photographs capturing the perfect sunset." 
            icon={<Camera size={16} />} 
            link="/photography/beach-sunset" 
            category="Photography"
            pageTheme="photography"
          />
          <FeaturedItem 
            title="Short Film: 'Echoes'" 
            description="My latest short film exploring memory and loss." 
            icon={<Video size={16} />} 
            link="/videos/echoes" 
            category="Videos"
            pageTheme="videos"
          />
          <FeaturedItem 
            title="Weather Dashboard App" 
            description="A simple weather app built with React and OpenWeather API." 
            icon={<AppWindow size={16} />} 
            link="/apps/weather-dashboard" 
            category="Apps"
            pageTheme="apps"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="text-page-writing" />
            <h2 className="text-xl font-bold font-display">Writing</h2>
          </div>
          <p className="text-muted-foreground">
            Articles, essays, and fiction writing projects in progress.
          </p>
          <Link to="/writing" className="text-page-writing font-medium hover:underline block">
            View all writing →
          </Link>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Camera className="text-page-photography" />
            <h2 className="text-xl font-bold font-display">Photography</h2>
          </div>
          <p className="text-muted-foreground">
            Collections of photos from various projects and shoots.
          </p>
          <Link to="/photography" className="text-page-photography font-medium hover:underline block">
            View all photography →
          </Link>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Video className="text-page-videos" />
            <h2 className="text-xl font-bold font-display">Videos</h2>
          </div>
          <p className="text-muted-foreground">
            Short films, documentaries, and other video projects.
          </p>
          <Link to="/videos" className="text-page-videos font-medium hover:underline block">
            View all videos →
          </Link>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AppWindow className="text-page-apps" />
            <h2 className="text-xl font-bold font-display">Apps</h2>
          </div>
          <p className="text-muted-foreground">
            Web applications and coding projects in development.
          </p>
          <Link to="/apps" className="text-page-apps font-medium hover:underline block">
            View all apps →
          </Link>
        </section>
      </div>
    </div>
  );
}
