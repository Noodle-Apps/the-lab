
import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full border-t-[3px] border-black bg-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 sm:px-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black font-display">The Lab</span>
          </Link>
          <p className="text-lg text-muted-foreground">
            A place for all my in-progress creative work.
          </p>
        </div>
        <div className="flex gap-8 text-lg font-bold">
          <Link to="/writing" className="hover:text-primary transition-colors">Writing</Link>
          <Link to="/photography" className="hover:text-primary transition-colors">Photography</Link>
          <Link to="/videos" className="hover:text-primary transition-colors">Videos</Link>
          <Link to="/apps" className="hover:text-primary transition-colors">Apps</Link>
        </div>
      </div>
    </footer>
  );
}
