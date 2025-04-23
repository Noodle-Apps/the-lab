import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Pages
import { HomePage } from "./pages/HomePage";
import { WritingPage } from "./pages/WritingPage";
import { PhotographyPage } from "./pages/PhotographyPage";
import { VideosPage } from "./pages/VideosPage";
import { AppsPage } from "./pages/AppsPage";

// Layout
import { Layout } from "./components/layout/Layout";
import { WritingArticlePage } from "./pages/WritingArticlePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/writing/:id" element={<WritingArticlePage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/apps" element={<AppsPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
