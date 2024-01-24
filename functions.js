// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 1
    for (const trail of trails) {
        total += Math.round(trail.length)
    }

    return total
}
// Get the shortest of all trails
const shortyTrail = (trailArray) => {
    let shortest = Infinity
    for (const trail of trailArray) {
        if(trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}
// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

// Get the sum of all river miles
const totalRiverMiles = (rivers) => {
    let total = 0
    for (const river of rivers) {
        total += river.length
    }

    return total
}

// Get the shortest of all rivers
const shortyRiver = (riverArray) => {
    let shortest = Infinity
    for (const river of riverArray) {
        if(river.length < shortest) {
            shortest = river.length
        }
    }

    return shortest
}

// Get the longest of all rivers
const longRiver = (allRivers) => {
    let longest = 0
    for (const river of allRivers) {
        if(river.length > longest) {
            longest = river.length
        }
    }

    return longest
}
const cheapTour = (tourArray) => {
    let cheapest = []
    for (const tour of tourArray) {
        if(tour.price === "$" ) {
            cheapest.push(tour.trailName)
        }
    }
    return cheapest
    
}
const expensiveTour = (tourArray) => {
    let pricey = []
    for (const tour of tourArray) {
        if(tour.price >= "$$$$" ) {
            pricey.push(tour.trailName)
        }
    }
    return pricey
}
const cheapRiver = (rivers) => {
    let dryRiver = []
    for (const river of rivers) {
        if(river.price === "$" ) {
            dryRiver.push(river.river)
        }
    }
    return dryRiver
}
const expensiveRiver = (riverArray) => {
    let hotRiver = []
    for (const river of riverArray) {
        if(river.price === "$$$$" ) {
            hotRiver.push(river.river)
        }
    }
    return hotRiver
}

const getTrailDetails = (trails) => {
    return `${trails.trailName} ${trails.latitude}, ${trails.longitude}] and is ${trails.length} long. The highlighted plant for the trip is ${trails.plantHighlight}.`
}

const getRiverDetails = (rivers) => {
    return `${rivers.river} [${rivers.latitude}, ${rivers.longitude}] and is ${rivers.length} long. The highlighted plant for the trip is ${rivers.uniqueFish}. `
}

module.exports = {
    totalTrailMiles, shortyTrail, longTrail, totalRiverMiles, shortyRiver, longRiver, cheapTour, expensiveTour, cheapRiver,expensiveRiver, getTrailDetails, getRiverDetails
}