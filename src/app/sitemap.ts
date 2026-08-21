import type { MetadataRoute } from "next";

const BASE_URL = "https://cloon.ie";

const routes = ["", "/business-challenges", "/how-i-work", "/my-story", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
