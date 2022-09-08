import {defineConfig} from 'vite';
import path from 'path';

const buildAliases = (mode) => {
    const aliases = {
        "@": path.resolve(__dirname, "./src"),
    };

    if (mode === 'test') {
        aliases['@tests'] = path.resolve(__dirname, "./tests");
        aliases['@scripts'] = path.resolve(__dirname, "./scripts");
    }
    return aliases;
};

// https://vitejs.dev/config/
const config = defineConfig(({mode}) => {
    const isDev = mode === 'dev';

    return ({
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/rebilly-js-sdk.js'),
                name: 'rebilly-js-sdk',
                fileName: (format) => `rebilly-js-sdk.${format}.js`
            },
            minify: isDev ? false : 'esbuild',
            sourcemap: isDev,
            rollupOptions: {
                // This options avoid a rollup error when detecting than rebilly-js-sdk.js uses both default and named exports
                // for backwards compatibility
                output: {exports: 'named'},
                // Vite is optimized for browser builds, and will respect the browser
                // flag inside axios package.json even in node mode, which results in 
                // the wrong network request adapter being selected.
                // Make axios external so that it is not bundled in with our dist, and will
                // be correctly handled when imported by any clients (node or browser).
                // https://github.com/vitejs/vite/issues/8910
                external: ['axios']
            }
        },
        resolve: {
            alias: buildAliases(mode),
        },
        //Vitest setup
        test: {
            global: true,
            environment: 'node',
            reporter: 'default',
            coverage: {reporter: ['text', 'lcov']} //lcov reporter is used by IDE coverage extensions
        }
    });
});

export default config;