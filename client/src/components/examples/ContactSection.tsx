import { ContactSection } from "../ContactSection";
import { ThemeProvider } from "../ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

export default function ContactSectionExample() {
  return (
    <ThemeProvider>
      <ContactSection />
      <Toaster />
    </ThemeProvider>
  );
}
