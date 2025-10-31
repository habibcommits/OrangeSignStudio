import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export default function ProjectsPage() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild data-testid="button-back-home">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-4">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful signage and printing projects delivered with excellence
            </p>
          </div>

          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-card border">
                  <div className="aspect-[4/3] bg-muted animate-pulse" />
                  <div className="p-6 space-y-2">
                    <div className="h-6 bg-muted animate-pulse rounded" />
                    <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-lg overflow-hidden bg-card border hover-elevate"
                  data-testid={`card-project-full-${project.id}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
