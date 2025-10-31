import { Star, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Ayesha Khan",
      role: "Marketing Manager",
      company: "BrightVision Advertising",
      text: "Their panaflex prints are stunning! Colors are vibrant and durable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Usman Ali",
      role: "Owner",
      company: "Ali Signs & Graphics",
      text: "Quality and consistency are unmatched — every print is perfect.",
      rating: 5,
    },
    {
      id: 3,
      name: "Hira Malik",
      role: "Event Coordinator",
      company: "Starline Events",
      text: "They always deliver on time; banners looked premium and stood out.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ahmed Raza",
      role: "Brand Executive",
      company: "Metro Mart Pvt. Ltd.",
      text: "Print quality and finishing are exceptional — still looks new after months.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands of businesses across Pakistan
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover-elevate" data-testid={`card-testimonial-${testimonial.id}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-4 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-semibold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            asChild
            data-testid="button-view-google-reviews"
          >
            <a 
              href="https://maps.app.goo.gl/MPMpKkpZVxRharrt6" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View More Reviews <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
