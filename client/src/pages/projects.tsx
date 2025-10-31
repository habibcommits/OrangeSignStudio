import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import project1 from "@assets/generated_images/LED_signage_project_example_0ea69b70.png";
import project2 from "@assets/generated_images/Outdoor_banner_project_example_66b5d8cf.png";
import project3 from "@assets/generated_images/Storefront_signage_project_example_3de86416.png";
import project4 from "@assets/generated_images/Panaflex_printing_project_example_cd59fc4e.png";
import project5 from "@assets/generated_images/LED_channel_letters_project_2d6aab8b.png";
import project6 from "@assets/generated_images/Event_banner_project_example_73011517.png";
import project7 from "@assets/generated_images/Large_format_wrap_project_8c93663c.png";

export default function ProjectsPage() {
  const projects = [
    { 
      id: 1, 
      image: project1, 
      title: "Premium LED Signage", 
      description: "Modern illuminated LED business signboard with vibrant orange and white lighting for a commercial storefront."
    },
    { 
      id: 2, 
      image: project2, 
      title: "Outdoor Billboard Campaign", 
      description: "Large outdoor advertising billboard with vibrant full-color panaflex print for maximum brand visibility."
    },
    { 
      id: 3, 
      image: project3, 
      title: "Storefront Branding", 
      description: "Professional storefront signage installation with premium quality printed signs for modern retail shops."
    },
    { 
      id: 4, 
      image: project4, 
      title: "Vibrant Panaflex Banner", 
      description: "High-quality large-format vinyl banner printing with colorful graphics and professional finish."
    },
    { 
      id: 5, 
      image: project5, 
      title: "LED Channel Letters", 
      description: "Premium outdoor LED channel letter signage with warm illumination for impressive brand presence."
    },
    { 
      id: 6, 
      image: project6, 
      title: "Event Display Backdrop", 
      description: "Large format event banner display for professional trade shows with vibrant colors and high quality print."
    },
    { 
      id: 7, 
      image: project7, 
      title: "Large Format Installation", 
      description: "Premium vinyl graphics for building wraps and vehicle branding with impressive scale and vibrant colors."
    },
  ];

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-lg overflow-hidden bg-card border hover-elevate"
                data-testid={`card-project-full-${project.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
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
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
