import { jsx as _jsx } from "react/jsx-runtime";
import { HeroSection } from "../HeroSection";
import { ThemeProvider } from "../ThemeProvider";
export default function HeroSectionExample() {
    return (_jsx(ThemeProvider, { children: _jsx(HeroSection, {}) }));
}
//# sourceMappingURL=HeroSection.js.map