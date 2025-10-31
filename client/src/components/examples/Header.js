import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from "../Header";
import { ThemeProvider } from "../ThemeProvider";
export default function HeaderExample() {
    return (_jsx(ThemeProvider, { children: _jsx(Header, {}) }));
}
//# sourceMappingURL=Header.js.map