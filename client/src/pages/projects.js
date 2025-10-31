import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useQuery } from "@tanstack/react-query";
export default function ProjectsPage() {
    const { data: projects = [], isLoading } = useQuery({
        queryKey: ["/api/projects"],
    });
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Header, {}), _jsx("main", { className: "pt-24 pb-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "mb-8", children: _jsx(Button, { variant: "ghost", asChild: true, "data-testid": "button-back-home", children: _jsxs(Link, { href: "/", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), " Back to Home"] }) }) }), _jsxs("div", { className: "text-center mb-12", children: [_jsxs("h1", { className: "font-heading font-bold text-4xl sm:text-5xl mb-4", children: ["Our ", _jsx("span", { className: "text-primary", children: "Projects" })] }), _jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Explore our portfolio of successful signage and printing projects delivered with excellence" })] }), isLoading ? (_jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [...Array(9)].map((_, i) => (_jsxs("div", { className: "rounded-lg overflow-hidden bg-card border", children: [_jsx("div", { className: "aspect-[4/3] bg-muted animate-pulse" }), _jsxs("div", { className: "p-6 space-y-2", children: [_jsx("div", { className: "h-6 bg-muted animate-pulse rounded" }), _jsx("div", { className: "h-4 bg-muted animate-pulse rounded w-3/4" })] })] }, i))) })) : (_jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((project) => (_jsxs("div", { className: "group rounded-lg overflow-hidden bg-card border hover-elevate", "data-testid": `card-project-full-${project.id}`, children: [_jsx("div", { className: "aspect-[4/3] overflow-hidden", children: _jsx("img", { src: project.imageUrl, alt: project.title, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" }) }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "font-heading font-semibold text-xl mb-2", children: project.title }), _jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: project.description })] })] }, project.id))) }))] }) }), _jsx(Footer, {}), _jsx(WhatsAppButton, {})] }));
}
//# sourceMappingURL=projects.js.map