import { ProjectsSection } from "../ProjectsSection";
import { ThemeProvider } from "../ThemeProvider";
import { Router } from "wouter";

export default function ProjectsSectionExample() {
  return (
    <ThemeProvider>
      <Router>
        <ProjectsSection />
      </Router>
    </ThemeProvider>
  );
}
