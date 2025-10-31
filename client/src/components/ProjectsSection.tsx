import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export function ProjectsSection() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const displayProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing excellence in every project we deliver
          </p>
        </div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg hover-elevate"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-heading font-semibold text-xl mb-1">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button size="lg" asChild data-testid="button-view-all-projects">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
