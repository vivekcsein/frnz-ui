import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from 'rollup-plugin-dts';
import scss from 'rollup-plugin-scss';
const fs = require('fs');
const packageJson = require("./package.json");

const extensions = [".js", ".jsx", ".ts", ".tsx", ".css"];

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve({
                browser: true,
                extensions
            }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            scss({
                // insert: true,
                output: 'dist/styles/frnz_styles.css'
            })
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        plugins: [dts()],
        external: [/\.scss$/, /\.css$/],
    },
];