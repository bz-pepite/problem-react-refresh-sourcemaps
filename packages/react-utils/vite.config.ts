import { UserConfig } from "vite";
// import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import path from "path";
import pkg from "./package.json";

const entry = path.resolve(__dirname, "src/index.ts");
const externalDeps = [...Object.keys(pkg.dependencies)];

// const configFn = createViteLibConfigFn({
//   entry,
//   externalDeps,
// });

const configFn: UserConfigFn = ({ command, mode }) => {
  if (command == "build") {
    const configLib: UserConfig = {
      logLevel: "warn",
      plugins: [],
      // esbuild: {
      //   minify: false,
      //   // minifyIdentifiers: false,
      //   // minifyWhitespace: false,
      //   // minifySyntax: false,
      // },
      build: {
        lib: {
          entry: entry,
          // name: pkg.name,
          formats: ["es"],
        },
        sourcemap: true,

        minify: false,
        // terserOptions: {
        //   mangle: false,
        // },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: externalDeps,
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            // globals: {
            //   react: 'React',
            // },
          },
        },
      },
    };

    return configLib;
  } else {
    // const proxiedEndpoints = [
    //     '/server',
    //     '/rest',
    //     '/upload',
    //     '/uploadWorkspace',
    //     '/export',
    //     '/csv-download',
    //     '/data-download',
    //     '/db-summary-export-csv',
    //     '/auth',
    //     '/api',
    //     '/openid',
    //     '/serviceDescription',
    //     '/tags',
    //     '/doc-convert',
    //     '/runScript',
    //     '/extensions',
    //     '/runScript',
    //     '/resources'
    // ];

    // const proxy = proxiedEndpoints.reduce(
    //     (obj, path) => ({ ...obj, [path]: { target: 'http://localhost:8888', changeOrigin: true } }),
    //     {}
    // );

    // https://vitejs.dev/config/
    const config: UserConfig = {
      plugins: [reactRefresh()],
      logLevel: "info",
      build: {
        sourcemap: true, //should be tried
      },
      // server: {
      //     proxy: proxy
      // },
      //base: './' // path of the asset is relative to the path of the index.html
    };

    return config;
  }
};

export default configFn;

// // https://vitejs.dev/config/
// export default defineConfig(({ command, mode }) => {
//   if (command == "build") {
//     const externalDeps = [...Object.keys(pkg.dependencies)];

//     const configLib: UserConfig = {
//       logLevel: "warn",
//       plugins: [],
//       build: {
//         lib: {
//           entry: path.resolve(__dirname, "src/index.ts"),
//           // name: pkg.name,
//           formats: ["es"],
//         },
//         sourcemap: true,
//         minify: true,
//         rollupOptions: {
//           // make sure to externalize deps that shouldn't be bundled
//           // into your library
//           external: externalDeps,
//           output: {
//             // Provide global variables to use in the UMD build
//             // for externalized deps
//             // globals: {
//             //   react: 'React',
//             // },
//           },
//         },
//       },
//     };

//     return configLib;
//   } else {
//     // const proxiedEndpoints = [
//     //     '/server',
//     //     '/rest',
//     //     '/upload',
//     //     '/uploadWorkspace',
//     //     '/export',
//     //     '/csv-download',
//     //     '/data-download',
//     //     '/db-summary-export-csv',
//     //     '/auth',
//     //     '/api',
//     //     '/openid',
//     //     '/serviceDescription',
//     //     '/tags',
//     //     '/doc-convert',
//     //     '/runScript',
//     //     '/extensions',
//     //     '/runScript',
//     //     '/resources'
//     // ];

//     // const proxy = proxiedEndpoints.reduce(
//     //     (obj, path) => ({ ...obj, [path]: { target: 'http://localhost:8888', changeOrigin: true } }),
//     //     {}
//     // );

//     // https://vitejs.dev/config/
//     const config: UserConfig = {
//       plugins: [reactRefresh()],
//       logLevel: "info",
//       // server: {
//       //     proxy: proxy
//       // },
//       //base: './' // path of the asset is relative to the path of the index.html
//     };

//     return config;
//   }
// });
