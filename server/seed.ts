import { storage } from "./storage";
import path from "path";

export async function seedProjects() {
  const projects = [
    {
      title: "Premium LED Signage",
      description: "Modern illuminated LED business signboard with vibrant orange and white lighting for a commercial storefront.",
      imageUrl: "/attached_assets/generated_images/LED_signage_project_example_0ea69b70.png",
    },
    {
      title: "Outdoor Billboard Campaign",
      description: "Large outdoor advertising billboard with vibrant full-color panaflex print for maximum brand visibility.",
      imageUrl: "/attached_assets/generated_images/Outdoor_banner_project_example_66b5d8cf.png",
    },
    {
      title: "Storefront Branding",
      description: "Professional storefront signage installation with premium quality printed signs for modern retail shops.",
      imageUrl: "/attached_assets/generated_images/Storefront_signage_project_example_3de86416.png",
    },
    {
      title: "Vibrant Panaflex Banner",
      description: "High-quality large-format vinyl banner printing with colorful graphics and professional finish.",
      imageUrl: "/attached_assets/generated_images/Panaflex_printing_project_example_cd59fc4e.png",
    },
    {
      title: "LED Channel Letters",
      description: "Premium outdoor LED channel letter signage with warm illumination for impressive brand presence.",
      imageUrl: "/attached_assets/generated_images/LED_channel_letters_project_2d6aab8b.png",
    },
    {
      title: "Event Display Backdrop",
      description: "Large format event banner display for professional trade shows with vibrant colors and high quality print.",
      imageUrl: "/attached_assets/generated_images/Event_banner_project_example_73011517.png",
    },
    {
      title: "Large Format Installation",
      description: "Premium vinyl graphics for building wraps and vehicle branding with impressive scale and vibrant colors.",
      imageUrl: "/attached_assets/generated_images/Large_format_wrap_project_8c93663c.png",
    },
  ];

  for (const project of projects) {
    await storage.createProject(project);
  }

  console.log(`Seeded ${projects.length} projects`);
}
