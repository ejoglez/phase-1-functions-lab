function distanceFromHqInBlocks(location){
    let x = location - 42; let y = Math.abs(x);
    return y;
}


function distanceFromHqInFeet(location){
    let x = distanceFromHqInBlocks(location) * 264; 
    return x;
}

function distanceTravelledInFeet(start, end){
    let x = (start - end) * 264;
    let y = Math.abs(x);
    return y;
}

function calculatesFarePrice(start, end){
    let x = distanceTravelledInFeet(start,end);
    
    if (x <= 400){
        return 0;
    } 
    if ((x > 400) && (x < 2000)) {
        return (x-400) * .02;
    }    
    if ((x > 2000) && (x < 2500)) {
        return 25;
    }
    else if (x > 2500) {
        return 'cannot travel that far';
    }
    
}

