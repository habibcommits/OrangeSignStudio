import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import project1 from "@assets/generated_images/LED_signage_project_example_0ea69b70.png";
import project2 from "@assets/generated_images/Outdoor_banner_project_example_66b5d8cf.png";
import project3 from "@assets/generated_images/Storefront_signage_project_example_3de86416.png";
import project4 from "@assets/generated_images/Panaflex_printing_project_example_cd59fc4e.png";
import project5 from "@assets/generated_images/LED_channel_letters_project_2d6aab8b.png";
import project6 from "@assets/generated_images/Event_banner_project_example_73011517.png";

export function ProjectsSection() {
  const projects = [
    { id: 1, image: project1, title: "Premium LED Signage", description: "Illuminated business signboard" },
    { id: 2, image: project2, title: "Outdoor Billboard", description: "Large-format advertising banner" },
    { id: 3, image: project3, title: "Storefront Signage", description: "Modern retail shop exterior" },
    { id: 4, image: project4, title: "Panaflex Banner", description: "Vibrant vinyl printing" },
    { id: 5, image: project5, title: "LED Channel Letters", description: "Premium illuminated letters" },
    { id: 6, image: project6, title: "Event Display", description: "Trade show backdrop" },
  ];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg hover-elevate"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
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
