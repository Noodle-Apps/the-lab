
import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold font-display">The Lab</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            A place for all my in-progress creative work.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link to="/writing" className="hover:underline">Writing</Link>
          <Link to="/photography" className="hover:underline">Photography</Link>
          <Link to="/videos" className="hover:underline">Videos</Link>
          <Link to="/apps" className="hover:underline">Apps</Link>
        </div>
      </div>
    </footer>
  );
}
