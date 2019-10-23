const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let nb_carton = input[0]
    let poid_total = 0
    let AR = 0

    input.splice(1).forEach(element => {
      poid_total += element
      if (poid_total > 100) {
        AR += 1
        poid_total = element
      }
      if (poid_total == 100) {
        AR += 1
        poid_total = 0
      }

    });
    if (poid_total != 0) {
      AR += 1
    }
    console.log(AR)
    return AR
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}