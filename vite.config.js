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
                output: {exports: 'named'}
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