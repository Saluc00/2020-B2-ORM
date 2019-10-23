const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let place_depart = input[0]
    console.log(`input = ${place_depart}`)
    let up= 0
    let down = 0 
    input.slice(1).forEach(element => {
      down += parseInt(element.split(' ')[0])
      up += parseInt(element.split(' ')[1])
    });

    let final = (place_depart - up) + down
    console.log(final)
    if (final < 100) {
      console.log(final)
      return 1000;
    } 

    if (final > 100 && final <= 10000) {
      console.log(final)
      return 100
    }

    if (10001 <= final ) {
      console.log(final)
      return 'KO'
    } 
    

  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}