function produceDrivingRange(blockRange) {
  return function (startString, finishString) {
    let start = parseInt(startString);
    let finish = parseInt(finishString);
    let travelDistance = Math.abs(finish - start);
    let difference = blockRange - travelDistance;

    if (difference >= 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(billAmount) {
    return (percentage * billAmount)
  }
}

function createDriver() {
  let driverId =0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
