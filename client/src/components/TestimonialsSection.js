import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "testimonials", className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("h2", { className: "font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4", children: ["What Our ", _jsx("span", { className: "text-primary", children: "Clients Say" })] }), _jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Trusted by thousands of businesses across Pakistan" })] }), _jsx("div", { className: "grid sm:grid-cols-2 gap-6 mb-8", children: testimonials.map((testimonial) => (_jsxs(Card, { className: "p-6 hover-elevate", "data-testid": `card-testimonial-${testimonial.id}`, children: [_jsx("div", { className: "flex gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "h-5 w-5 fill-primary text-primary" }, i))) }), _jsx("p", { className: "text-lg mb-4 leading-relaxed", children: testimonial.text }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center", children: _jsx("span", { className: "font-heading font-semibold text-primary text-lg", children: testimonial.name.charAt(0) }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: testimonial.name }), _jsxs("div", { className: "text-sm text-muted-foreground", children: [testimonial.role, ", ", testimonial.company] })] })] })] }, testimonial.id))) }), _jsx("div", { className: "text-center", children: _jsx(Button, { size: "lg", variant: "outline", asChild: true, "data-testid": "button-view-google-reviews", children: _jsxs("a", { href: "https://maps.app.goo.gl/MPMpKkpZVxRharrt6", target: "_blank", rel: "noopener noreferrer", children: ["View More Reviews ", _jsx(ExternalLink, { className: "ml-2 h-5 w-5" })] }) }) })] }) }));
}
//# sourceMappingURL=TestimonialsSection.js.map