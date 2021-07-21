const esbuild = require("esbuild");
const path = require("path");

const isDev = !!process.env.DEV;

const externals = ["@stitches/react", "react", "react-dom"];

const common = {
    entryPoints: ["packages/index.ts", "packages/select/index.ts", "packages/core/index.ts", "packages/icons/index.ts"],
    bundle: true,
    outdir: "dist",
    // splitting: true,
    external: externals,
    minify: !isDev,
    watch: isDev,
    define: { "process.env.NODE_ENV": '"production"' },
    target: ["es2016"],
    platform: "node",
    inject: [path.join(__dirname, "react-namespace.js")],
};

// esbuild
//     .build({
//         ...common,
//         format: "cjs",
//     })
//     .catch(() => process.exit(1));

esbuild
    .build({
        ...common,
        splitting: true,
        format: "esm",
        outExtension: { ".js": ".esm.js" },
    })
    .catch(() => process.exit(1));
