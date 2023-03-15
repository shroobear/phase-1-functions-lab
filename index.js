// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    return streetNumber <= 42 ? (42 - streetNumber) : (streetNumber - 42)
}

function distanceFromHqInFeet(streetNumber) {
    return (distanceFromHqInBlocks(streetNumber) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return (start <= destination) ? (destination - start) * 264 : (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
   let footage = distanceTravelledInFeet(start, destination)
    if (footage <= 400) {
        return (0)
    } else if (footage <= 2000) {
        return (footage-400)*.02
    } else if (footage <= 2500) {
        return (25)
    } else return 'cannot travel that far'
}