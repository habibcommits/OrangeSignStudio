import { Award, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "30+", color: "text-primary" },
    { icon: Target, label: "Projects Delivered", value: "500+", color: "text-primary" },
    { icon: Users, label: "Happy Clients", value: "5K+", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            About <span className="text-primary">Orange Sign</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A premium printing and signage studio delivering excellence since 1998
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center hover-elevate">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className="font-heading font-bold text-4xl mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h3 className="font-heading font-semibold text-2xl mb-4">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Orange Sign has been at the forefront of the printing and signage industry for over three decades. 
              We specialize in premium panaflex printing, LED signage, and large-format advertising solutions 
              that help businesses stand out and make lasting impressions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our commitment to quality and innovation has made us the trusted partner for thousands of businesses 
              across Islamabad and Rawalpindi. From small startups to large enterprises, we deliver visual 
              solutions that transform brands into unforgettable experiences.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-heading font-semibold mb-2">Coverage</h4>
                <p className="text-sm text-muted-foreground">Nationwide printing solutions across Islamabad and Rawalpindi</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-2">Working Hours</h4>
                <p className="text-sm text-muted-foreground">Mon–Sat, 9AM–8PM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
