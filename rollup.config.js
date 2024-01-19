import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from 'rollup-plugin-dts';
import scss from 'rollup-plugin-scss';
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
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/]
    },
    {
        input: "src/components/ui/styles.ui.ts",
        plugins: [
            scss({
                output: 'dist/styles/styles.ui.css'
            })
        ]
    }
];