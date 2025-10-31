import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Trash2, Upload, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
export default function AdminPage() {
    const { toast } = useToast();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        image: null,
    });
    const { data: projects = [], isLoading } = useQuery({
        queryKey: ["/api/projects"],
        enabled: isLoggedIn,
    });
    const loginMutation = useMutation({
        mutationFn: async (credentials) => {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });
            if (!response.ok)
                throw new Error("Invalid credentials");
            return response.json();
        },
        onSuccess: (data) => {
            setToken(data.token);
            setIsLoggedIn(true);
            toast({
                title: "Success",
                description: "Logged in successfully",
            });
        },
        onError: () => {
            toast({
                title: "Error",
                description: "Invalid credentials",
                variant: "destructive",
            });
        },
    });
    const addProjectMutation = useMutation({
        mutationFn: async (formData) => {
            const response = await fetch("/api/projects", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            });
            if (!response.ok)
                throw new Error("Failed to add project");
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
            setNewProject({ title: "", description: "", image: null });
            toast({
                title: "Success",
                description: "Project added successfully",
            });
        },
        onError: () => {
            toast({
                title: "Error",
                description: "Failed to add project",
                variant: "destructive",
            });
        },
    });
    const deleteProjectMutation = useMutation({
        mutationFn: async (id) => {
            const response = await fetch(`/api/projects/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok)
                throw new Error("Failed to delete project");
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
            toast({
                title: "Success",
                description: "Project deleted successfully",
            });
        },
        onError: () => {
            toast({
                title: "Error",
                description: "Failed to delete project",
                variant: "destructive",
            });
        },
    });
    const handleLogin = (e) => {
        e.preventDefault();
        loginMutation.mutate({ email, password });
    };
    const handleAddProject = (e) => {
        e.preventDefault();
        if (!newProject.image) {
            toast({
                title: "Error",
                description: "Please select an image",
                variant: "destructive",
            });
            return;
        }
        const formData = new FormData();
        formData.append("title", newProject.title);
        formData.append("description", newProject.description);
        formData.append("image", newProject.image);
        addProjectMutation.mutate(formData);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setToken("");
        setEmail("");
        setPassword("");
    };
    if (!isLoggedIn) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-muted/30 p-4", children: _jsxs(Card, { className: "w-full max-w-md p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "w-16 h-16 rounded-md bg-primary flex items-center justify-center mx-auto mb-4", children: _jsx("span", { className: "text-primary-foreground font-heading font-bold text-3xl", children: "O" }) }), _jsx("h1", { className: "font-heading font-bold text-2xl mb-2", children: "Admin Login" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Sign in to manage projects" })] }), _jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [_jsx("div", { children: _jsx(Input, { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), required: true, "data-testid": "input-admin-email" }) }), _jsx("div", { children: _jsx(Input, { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true, "data-testid": "input-admin-password" }) }), _jsx(Button, { type: "submit", className: "w-full", "data-testid": "button-admin-login", disabled: loginMutation.isPending, children: loginMutation.isPending ? "Signing in..." : "Sign In" })] })] }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-muted/30 p-4 sm:p-8", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsx("h1", { className: "font-heading font-bold text-3xl", children: "Project Management" }), _jsxs(Button, { variant: "outline", onClick: handleLogout, "data-testid": "button-admin-logout", children: [_jsx(LogOut, { className: "mr-2 h-4 w-4" }), " Logout"] })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-8", children: [_jsxs(Card, { className: "p-6", children: [_jsx("h2", { className: "font-heading font-semibold text-xl mb-4", children: "Add New Project" }), _jsxs("form", { onSubmit: handleAddProject, className: "space-y-4", children: [_jsx("div", { children: _jsx(Input, { placeholder: "Project Title", value: newProject.title, onChange: (e) => setNewProject({ ...newProject, title: e.target.value }), required: true, "data-testid": "input-project-title" }) }), _jsx("div", { children: _jsx(Textarea, { placeholder: "Project Description", rows: 4, value: newProject.description, onChange: (e) => setNewProject({ ...newProject, description: e.target.value }), required: true, "data-testid": "input-project-description" }) }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Project Image" }), _jsx(Input, { type: "file", accept: "image/*", onChange: (e) => setNewProject({ ...newProject, image: e.target.files?.[0] || null }), required: true, "data-testid": "input-project-image" })] }), _jsxs(Button, { type: "submit", className: "w-full", "data-testid": "button-add-project", disabled: addProjectMutation.isPending, children: [_jsx(Upload, { className: "mr-2 h-4 w-4" }), addProjectMutation.isPending ? "Adding..." : "Add Project"] })] })] }), _jsxs(Card, { className: "p-6", children: [_jsx("h2", { className: "font-heading font-semibold text-xl mb-4", children: "Quick Stats" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between p-4 bg-muted rounded-lg", children: [_jsx("span", { className: "text-sm text-muted-foreground", children: "Total Projects" }), _jsx("span", { className: "font-heading font-bold text-2xl", children: projects.length })] }), _jsxs("div", { className: "flex items-center justify-between p-4 bg-muted rounded-lg", children: [_jsx("span", { className: "text-sm text-muted-foreground", children: "Status" }), _jsx("span", { className: "text-sm font-semibold text-green-600", children: "Active" })] })] })] })] }), _jsxs(Card, { className: "p-6", children: [_jsx("h2", { className: "font-heading font-semibold text-xl mb-4", children: "All Projects" }), isLoading ? (_jsx("div", { className: "text-center py-8 text-muted-foreground", children: "Loading projects..." })) : projects.length === 0 ? (_jsx("div", { className: "text-center py-8 text-muted-foreground", children: "No projects yet. Add your first project above." })) : (_jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: projects.map((project) => (_jsxs("div", { className: "group relative rounded-lg overflow-hidden border hover-elevate", children: [_jsx("div", { className: "aspect-[4/3] overflow-hidden", children: _jsx("img", { src: project.imageUrl, alt: project.title, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold mb-1 truncate", children: project.title }), _jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: project.description }), _jsxs(Button, { variant: "destructive", size: "sm", className: "w-full mt-3", onClick: () => deleteProjectMutation.mutate(project.id), disabled: deleteProjectMutation.isPending, "data-testid": `button-delete-project-${project.id}`, children: [_jsx(Trash2, { className: "mr-2 h-4 w-4" }), "Delete"] })] })] }, project.id))) }))] })] }) }));
}
//# sourceMappingURL=admin.js.map