#FRNZ-UI

<h1>A React-UI library for creating front-end development easy</h1>

<p>Create a basic npm package

    npm init

</p>

<p> Install typescript

    npm i --save-dev react react-dom @types/react @types/react-dom typescript tslib

</p>

<p>Install Rollup bundler as developer dependency

    npm i --save-dev rollup

</p>

<p>Install typescript plugins for the bundler

    npm i --save-dev @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts

</p>

<p>Install other required developer dependency

    npm i --save-dev @rollup/plugin-node-resolve rollup-plugin-peer-deps-external

</p>

<p>Install sass plugin for rollup

    npm i --save-dev rollup-plugin-scss@3 sass

</p>

<p>install all the plugin in one line

    npm i --save-dev rollup @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts
    @rollup/plugin-node-resolve
    rollup-plugin-peer-deps-external rollup-plugin-scss@3 sass

</p>

<p> Create a .gitignore file and paste them

    #mac hidden file
    .DS.Store
    .rollup.cache
    .npmrc

</p>

<p>Create a .npmignorefile and paste them

    /src
    /node_modules
    .env
    .DS_Store
    .npmrc
    tsconfig.json
    tsup.config.ts
    rollup.config.js
    rollup.config.mjs

</p>

<p>Create a .npmrc file

    init-author-name={GIT_NAME}
    registry=https://registry.npmjs.org/
    @{GIT_USERNAME}:registry=https://npm.pkg.github.com/
    //npm.pkg.github.com/:authToken={PUT_YOUR_KEY}

</p>

<p>create typescript file tsconfig.json

    {
    "compilerOptions": {
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "allowUnreachableCode": false,
    "declaration": true,
    "declarationDir": "types",
    "emitDeclarationOnly": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es2020", "dom"],
    "moduleResolution": "Node",
    "module": "ESNext",
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "outDir": "dist",
    "sourceMap": true,
    "skipLibCheck": true,
    "strict": true,
    "strictNullChecks": true,
    "target": "ES2020",
    // "types": ["node", "react"],
    },
    "include": ["src/**/*.tsx", "src/**/*.ts"],
    "exclude": ["node_modules","src/**/*.test.tsx"]
    }

</p>

<p>Create a rollup.config.js file and paste it

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

</p>
