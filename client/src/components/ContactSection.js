import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
export function ContactSection() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                toast({
                    title: "Message sent!",
                    description: "We'll get back to you within 24 hours.",
                });
                setFormData({ name: "", email: "", phone: "", message: "" });
            }
            else {
                toast({
                    title: "Error",
                    description: "Failed to send message. Please try again.",
                    variant: "destructive",
                });
            }
        }
        catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        }
    };
    const handleWhatsApp = () => {
        const message = formData.message
            ? `Hello Orange Sign, I visited your website and would like to discuss: ${formData.message}`
            : "Hello Orange Sign, I visited your website and would like to discuss your services.";
        window.open(`https://wa.me/923022360007?text=${encodeURIComponent(message)}`, "_blank");
    };
    const contactInfo = [
        { icon: Phone, label: "Phone", value: "+92 302 2360007", href: "tel:+923022360007" },
        { icon: Mail, label: "Email", value: "orangesign1998@gmail.com", href: "mailto:orangesign1998@gmail.com" },
        { icon: Clock, label: "Working Hours", value: "Mon–Sat, 9AM–8PM", href: null },
        { icon: MapPin, label: "Address", value: "Shop No.11, Capital Plaza, G-11 Markaz, Islamabad", href: null },
    ];
    return (_jsx("section", { id: "contact", className: "py-20 bg-muted/30", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("h2", { className: "font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4", children: ["Get In ", _jsx("span", { className: "text-primary", children: "Touch" })] }), _jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Have a project in mind? Let's discuss how we can bring your vision to life" })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "p-8", children: [_jsx("h3", { className: "font-heading font-semibold text-2xl mb-6", children: "Send us a message" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("div", { children: _jsx(Input, { placeholder: "Your Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true, "data-testid": "input-name" }) }), _jsx("div", { children: _jsx(Input, { type: "email", placeholder: "Your Email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true, "data-testid": "input-email" }) }), _jsx("div", { children: _jsx(Input, { type: "tel", placeholder: "Your Phone", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), required: true, "data-testid": "input-phone" }) }), _jsx("div", { children: _jsx(Textarea, { placeholder: "Your Message", rows: 6, value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), required: true, "data-testid": "input-message" }) }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [_jsx(Button, { type: "submit", className: "flex-1", "data-testid": "button-send-message", children: "Send Message" }), _jsxs(Button, { type: "button", variant: "outline", className: "flex-1", onClick: handleWhatsApp, "data-testid": "button-whatsapp-contact", children: [_jsx(SiWhatsapp, { className: "mr-2 h-5 w-5" }), " WhatsApp"] })] })] })] }), _jsx("div", { className: "space-y-4", children: contactInfo.map((info) => (_jsx(Card, { className: "p-6 hover-elevate", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0", children: _jsx(info.icon, { className: "h-6 w-6 text-primary" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: "font-semibold mb-1", children: info.label }), info.href ? (_jsx("a", { href: info.href, className: "text-sm text-muted-foreground hover:text-primary transition-colors break-words", "data-testid": `link-${info.label.toLowerCase().replace(/\s+/g, '-')}`, children: info.value })) : (_jsx("div", { className: "text-sm text-muted-foreground break-words", children: info.value }))] })] }) }, info.label))) })] })] }) }));
}
//# sourceMappingURL=ContactSection.js.map