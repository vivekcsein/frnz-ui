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
    
    import "frnz-ui/dist/styles/styles_ui.css";

</p>

<p>Button example

    <Button
    label="click me"
    variant="starlight"
    onClick={(e)=>{console.log("hello")}}
    fx={{
        backgroundColor: "red",
        color: "green",
        padding: "1rem .5rem",
    }}
    fxc{{
        primary:"red",
        secondary:"green"
        bgc:"black",
    }}
    />

</p>

<p>Input Example

    <Input
        id="ok"
         name="ok"
        type="text"
        variant="Password"
        placeholder="Enter your password"
        fx={
            {
                // padding: "2rem",
                // color: "yellow",
              }
            }
        // ref={useRef}
    />

</p>
<p>Hamburger example

    <Hamburger
        variant="Snowy"
        onClick={(e)=>{console.log("hamburger clicked")}}
        debug={true}
        color="red"
    />

</p>

<p>to make borderless set strokeWidth property to -1</p>
<p>SVG example

    <SVG
        variant="Rating"
        show={40}
        size={240}
        strokeWidth={5}
        fxc={{ primary: "red", secondary: "green" }}
    />

</p>
