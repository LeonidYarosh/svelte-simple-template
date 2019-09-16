import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import less from 'rollup-plugin-less'
import image from 'rollup-plugin-image'

const production = !process.env.ROLLUP_WATCH

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/bundle.js',
    },
    plugins: [
        svelte({
            dev: !production,
            css: false,
        }),
        image(),
        less({
            output: 'public/bundle.css',
        }),

        resolve({
            browser: true,
            dedupe: importee =>
                importee === 'svelte' || importee.startsWith('svelte/'),
        }),
        commonjs(),

        !production && livereload('public'),

        production && terser(),
    ],
    watch: {
        clearScreen: false,
    },
}
