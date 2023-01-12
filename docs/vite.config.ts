//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
var options = {
  tokenize: "full",
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
}); //vite.config.ts
