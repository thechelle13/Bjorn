const { trails, rivers } = require("./data.js")
const {totalTrailMiles, shortyTrail, longTrail, totalRiverMiles, shortyRiver, longRiver, cheapTour, expensiveTour, cheapRiver, expensiveRiver, getTrailDetails,getRiverDetails} = require("./functions.js")


console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

const shortestTrail = shortyTrail(trails)
console.log(`The shortest trail is ${shortestTrail} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)


console.log('***************************************************')
console.log('*****         Trail Tour Prices               *****')
console.log('***************************************************')
// For the least expensive, only show trails where the number of dollar signs in the price is 1.



console.log(`The least expensive trails are`)
//console.log(`${cheapTour(trails).join('\n')}`)
console.log(`${cheapTour(trails).map(trail => `\t${trail}`).join('\n')}`);

// For the most expensive, only show trails where the number of dollar signs in the price is 4, or greater.


console.log(`The most expensive trails are `)
console.log(`${expensiveTour(trails).map(trail => `\t${trail}`).join('\n')}`);


console.log('TRAIL DETAILS:')
console.log('------------------------------------------')

// information needed from array : name of trail, lat & long, length, highlighted plants
// 


//  ex: Fallen Soldier's Route starts at [2.013818, -75.9373449] and is 49.2 kilometers long.
//  The highlighted plant for the trip is Pinewoods Horkelia.

for (const trail of trails) {
    const details = getTrailDetails(trail)
    console.log(`${details}`)
}

console.log('***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************')



const riverTotal = totalRiverMiles(rivers)
console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const shortestRiver = shortyRiver(rivers)
console.log(`The shortest river tour is ${shortestRiver} kilometers`)

const longestRiver = longRiver(rivers)
console.log(`The longest river tour is ${longestRiver} kilometers`)


console.log('***************************************************')
console.log('*****         River Tour Prices               *****')
console.log('***************************************************')


console.log(`The least expensive rivers are `)
// console.log(`${cheapRiver(rivers)}`)
console.log(`${cheapRiver(rivers).map(river => `\t${river}`).join('\n')}`);

console.log(`The most expensive rivers are `)
// console.log(`${expensiveRiver(rivers)}`)
console.log(`${expensiveRiver(rivers).map(river => `\t${river}`).join('\n')}`);



console.log('RIVER DETAILS:')
console.log('------------------------------------------')


for (const river of rivers) {
    const details = getRiverDetails(river)
    console.log(`${details}`)
}

