import { Lightbulb, Printer, Building2, Palette, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: "LED Signage",
      description: "Premium LED channel letters and illuminated signs that make your brand shine day and night.",
    },
    {
      icon: Printer,
      title: "Panaflex Printing",
      description: "High-quality large-format panaflex printing with vibrant, durable colors that last.",
    },
    {
      icon: Building2,
      title: "Outdoor Advertising",
      description: "Eye-catching billboards, banners, and outdoor displays for maximum brand visibility.",
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Professional graphic design services to create stunning visual identities for your brand.",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive printing and signage solutions tailored to your business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="p-6 hover-elevate">
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <button 
                className="text-sm text-primary hover:underline inline-flex items-center"
                onClick={scrollToContact}
                data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
