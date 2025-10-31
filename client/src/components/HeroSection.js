import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("section", { id: "hero", className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-no-repeat", style: { backgroundImage: `url(${heroImage})` } }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" }), _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsxs("h1", { className: "font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight", children: ["We Transform Brands Into", _jsx("br", {}), _jsx("span", { className: "text-primary", children: "Visual Experiences" })] }), _jsx("p", { className: "text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed", children: "Premium panaflex printing, LED signage, and large-format advertising solutions" }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12", children: [_jsxs(Button, { size: "lg", className: "text-lg px-8", onClick: scrollToContact, "data-testid": "button-get-started", children: ["Get Started ", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx(Button, { size: "lg", variant: "outline", className: "text-lg px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20", asChild: true, "data-testid": "button-whatsapp-hero", children: _jsxs("a", { href: "https://wa.me/923022360007", target: "_blank", rel: "noopener noreferrer", children: [_jsx(SiWhatsapp, { className: "mr-2 h-5 w-5" }), " Contact via WhatsApp"] }) })] }), _jsxs("div", { className: "flex flex-wrap items-center justify-center gap-8 text-white", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-heading font-bold text-3xl text-primary", children: "30+" }), _jsxs("span", { className: "text-sm", children: ["Years", _jsx("br", {}), "Experience"] })] }), _jsx("div", { className: "w-px h-12 bg-white/20" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-heading font-bold text-3xl text-primary", children: "500+" }), _jsxs("span", { className: "text-sm", children: ["Projects", _jsx("br", {}), "Completed"] })] }), _jsx("div", { className: "w-px h-12 bg-white/20" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-heading font-bold text-3xl text-primary", children: "5K+" }), _jsxs("span", { className: "text-sm", children: ["Clients", _jsx("br", {}), "Served"] })] })] })] })] }));
}
//# sourceMappingURL=HeroSection.js.map