const destination = 42
function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation < 42){
        return (destination - pickUpLocation)
    }
    else {
    return (pickUpLocation - destination)
    }
}

function distanceFromHqInFeet(pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation)*264
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination)* 264
    }
    else {
        return (destination - start)* 264
    }

}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    }
    if (distance > 400, distance <= 2000){
        return (distance - 400) * .02
    }
    if (distance > 2000, distance <2500){
        return 25
    }
    if (distance > 2500){
        return 'cannot travel that far'
    }
}