import { jsx as _jsx } from "react/jsx-runtime";
import { ProjectsSection } from "../ProjectsSection";
import { ThemeProvider } from "../ThemeProvider";
import { Router } from "wouter";
export default function ProjectsSectionExample() {
    return (_jsx(ThemeProvider, { children: _jsx(Router, { children: _jsx(ProjectsSection, {}) }) }));
}
//# sourceMappingURL=ProjectsSection.js.map