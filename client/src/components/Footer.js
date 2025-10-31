import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Phone, Mail, MapPin } from "lucide-react";
export function Footer() {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
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
    const quickLinks = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
    ];
    const services = [
        "LED Signage",
        "Panaflex Printing",
        "Outdoor Advertising",
        "Custom Design",
    ];
    return (_jsx("footer", { className: "bg-card border-t mt-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx("div", { className: "w-10 h-10 rounded-md bg-primary flex items-center justify-center", children: _jsx("span", { className: "text-primary-foreground font-heading font-bold text-xl", children: "O" }) }), _jsx("span", { className: "font-heading font-bold text-xl", children: "Orange Sign" })] }), _jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "We transform brands into visual experiences with premium printing and signage solutions." })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-heading font-semibold mb-4", children: "Quick Links" }), _jsx("ul", { className: "space-y-2", children: quickLinks.map((link) => (_jsx("li", { children: _jsx("button", { onClick: () => scrollToSection(link.href), className: "text-sm text-muted-foreground hover:text-primary transition-colors", "data-testid": `link-footer-${link.label.toLowerCase()}`, children: link.label }) }, link.href))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-heading font-semibold mb-4", children: "Services" }), _jsx("ul", { className: "space-y-2", children: services.map((service) => (_jsx("li", { className: "text-sm text-muted-foreground", children: service }, service))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-heading font-semibold mb-4", children: "Contact" }), _jsxs("ul", { className: "space-y-3", children: [_jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [_jsx(Phone, { className: "h-4 w-4 mt-0.5 flex-shrink-0" }), _jsx("a", { href: "tel:+923022360007", className: "hover:text-primary transition-colors", children: "+92 302 2360007" })] }), _jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [_jsx(Mail, { className: "h-4 w-4 mt-0.5 flex-shrink-0" }), _jsx("a", { href: "mailto:orangesign1998@gmail.com", className: "hover:text-primary transition-colors break-all", children: "orangesign1998@gmail.com" })] }), _jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [_jsx(MapPin, { className: "h-4 w-4 mt-0.5 flex-shrink-0" }), _jsx("span", { children: "G-11 Markaz, Islamabad" })] })] })] })] }), _jsx("div", { className: "pt-8 border-t text-center text-sm text-muted-foreground", children: "\u00A9 2025 Orange Sign. All Rights Reserved." })] }) }));
}
//# sourceMappingURL=Footer.js.map