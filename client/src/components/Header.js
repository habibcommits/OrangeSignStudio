import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { SiWhatsapp } from "react-icons/si";
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
    ];
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
        setIsMenuOpen(false);
    };
    return (_jsx("header", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-10 h-10 rounded-md bg-primary flex items-center justify-center", children: _jsx("span", { className: "text-primary-foreground font-heading font-bold text-xl", children: "O" }) }), _jsx("span", { className: "font-heading font-bold text-xl", children: "Orange Sign" })] }), _jsx("nav", { className: "hidden md:flex items-center gap-1", children: navItems.map((item) => (_jsx(Button, { variant: "ghost", onClick: () => scrollToSection(item.href), "data-testid": `link-nav-${item.label.toLowerCase()}`, children: item.label }, item.href))) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "ghost", size: "icon", asChild: true, className: "hidden sm:flex", "data-testid": "button-whatsapp-header", children: _jsx("a", { href: "https://wa.me/923022360007", target: "_blank", rel: "noopener noreferrer", children: _jsx(SiWhatsapp, { className: "h-5 w-5" }) }) }), _jsx(ThemeToggle, {}), _jsx(Button, { variant: "ghost", size: "icon", className: "md:hidden", onClick: () => setIsMenuOpen(!isMenuOpen), "data-testid": "button-menu-toggle", children: isMenuOpen ? _jsx(X, { className: "h-5 w-5" }) : _jsx(Menu, { className: "h-5 w-5" }) })] })] }), isMenuOpen && (_jsx("div", { className: "md:hidden py-4 space-y-2", children: navItems.map((item) => (_jsx(Button, { variant: "ghost", className: "w-full justify-start", onClick: () => scrollToSection(item.href), "data-testid": `link-nav-mobile-${item.label.toLowerCase()}`, children: item.label }, item.href))) }))] }) }));
}
//# sourceMappingURL=Header.js.map