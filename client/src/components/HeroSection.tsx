import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import heroImage from "@assets/generated_images/Premium_signage_hero_background_1aa9a65f.png";

export function HeroSection() {
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
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          We Transform Brands Into<br />
          <span className="text-primary">Visual Experiences</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Premium panaflex printing, LED signage, and large-format advertising solutions
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={scrollToContact}
            data-testid="button-get-started"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            asChild
            data-testid="button-whatsapp-hero"
          >
            <a href="https://wa.me/923022360007" target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="mr-2 h-5 w-5" /> Contact via WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-3xl text-primary">30+</span>
            <span className="text-sm">Years<br />Experience</span>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-3xl text-primary">500+</span>
            <span className="text-sm">Projects<br />Completed</span>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-3xl text-primary">5K+</span>
            <span className="text-sm">Clients<br />Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
