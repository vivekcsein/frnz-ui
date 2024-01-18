#FRNZ-UI

<h1>A React-UI library for creating front-end development easy</h1>

<p>to install library from npm

    npm i frnz-ui

</p>

<p>to install library from yarn

    yarn add frnz-ui

</p>

<p>to install library from pnpm

    pnpm add frnz-ui

</p>

<p>currently in development phase</p>

<p>you can use import Button and Input from

    import { Button, Input } from "frnz-ui";

</p>

<p>import css from frnz-ui
    
    import "frnz-ui/dist/styles/frnz_styles.css";

</p>

<p>id is a string, the label is a string, and the variant is a string. you have to provide as props</p>

<p>one example

    <Button
    id="01"
    label="click me"
    variant="starlight"
    onClick={(e)=>{console.log("hello")}}
    fx={{
        backgroundColor: "red",
        color: "green",
        padding: "1rem .5rem",
    }}
    />

</p>
