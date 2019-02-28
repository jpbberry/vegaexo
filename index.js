const vega = require('vega')

//class shit

class MakeChartObj {
    constructor(VAL, FILE) {
        let template = JSON.parse(require('fs').readFileSync(FILE))
        template.data[0].values = VAL
        return template;
    }
}

class Expression {
    constructor(equation) {
        if(!equation) throw new Error('Missing expression.')
        this.equation = equation
    } 
    parse() {
        //equation handling
        let parse = this.equation
        parse = " " + parse + " "
        for(var i=0;i<this.equation.length;i++) {
            if(this.equation[i].match(/x/gi) && this.equation[i-1] && /[1-9]/gi.test(this.equation[i-1])) {
                parse = parse.replace(/x/gi, '*x')
            }
        }
        let exponentExp = /\s.+\^.+\s/gi
        if(parse.match(exponentExp)) {
            let vv = exponentExp.exec(parse)[0].split('^')
            parse = parse.replace(exponentExp, `Math.pow(${vv[0]}, ${vv[1]})`)
        }
        return parse
    }
}

class VegaValues {
    constructor(DATA, opts) {
        if(!DATA) throw new Error('Missing DATA')
        let FILE = opts.file || require('path').join(__dirname, 'base-template.json')
        // Get 10 values of DATA if x=...
            var values = []
            let parsed_data = new Expression(DATA).parse()
            for(var i=0;i<10;i++) {
                values[i] = eval(`var x = ${i};${parsed_data};`);
            }
        //End
        //Push to base chart
            var valueForChart = []
            for(var i=0;i<10;i++) {
                valueForChart[i] = {
                    "x": i,
                    "y": values[i]
                }
            }
            var chart = new MakeChartObj(valueForChart, FILE)
        //End
            var view = new vega
                .View(vega.parse(chart))
                .renderer('none')
                .initialize();
            return view.toCanvas()
    }
}
module.exports = VegaValues