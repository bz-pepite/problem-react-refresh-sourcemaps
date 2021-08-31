import { defineConfig, UserConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const config: UserConfig = {
    plugins: [reactRefresh()],
    logLevel: command == "build" ? "warn" : "info",
    build: {
      sourcemap: true,
      minify: "esbuild",
      rollupOptions: {
        onwarn: (warning, defaultWarningHandeler) => {
          if (
            warning.message ==
            "Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification"
          ) {
            // hide this boring warning!. We need eval for custom widget loading. do nothing with it.
          } else {
            defaultWarningHandeler(warning);
          }
        },
      },
    },
  };
  return config;
});
