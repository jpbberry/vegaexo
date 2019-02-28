# vegaEXP
vega expressions is a super simple way to turn graph equations into lines for vega!!

vega expressions was made for the original use of my [discord bot](https://discord.gg/CRAbk4w)
but later decided to be posted :D

## Simple setup
```js
const vegaEXP = require('vegaexp');
new vegaEXP('2x+3').then((canvas) =>{ // Put the equation in here, this is also a promise that returns the canvas vega usually gives ya! :p
    // If you want to interact with the canvas as usual you can here!
    //Do what you want with this, in this example I'm just going to write the file
    fs.writeFileSync('./coolimage.png', canvas.toBuffer()) // Just look up Canvas documentation if you want to use these properly!
})
```
And now we have a picture!

./coolimage.png:

![Image](https://img.jt3ch.net/93f69f87.png)

Exponent support is here, and we have many more plans like:
1. Absolute Value
2. Optimized graph visualization
3. Better customizability

## Customizing
At the moment customizing isn't very easy! But definitely planned!! If you want to customize the look of your graph you can either:
1. Edit ./node_modules/vegaexp/base-template.json
2. When making a `new vegaEXP` you can do `vegaEXP(EXP, {file: YOUR_OWN_FILE.json})` (Full path). More customization will come soon but for no you need to learn the way [vega customizes their visualization in JSON](https://vega.github.io/vega-lite/tutorials/getting_started.html#customize-your-visualization)

# Links
[NPM Package](https://npmjs.com/package/vegaexp)

[GitHub](https://github.com/jpbberry/vegaexo)

[Discord (For Support)](https://discord.gg/CRAbk4w)