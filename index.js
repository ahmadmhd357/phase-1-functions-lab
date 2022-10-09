// Code your solution in this file!
function distanceFromHqInBlocks(location){
let scuber = 42;
if (location>scuber)
{let disBlocks= location - scuber;
return disBlocks;}
else if(location<scuber){
    let disblocks= (location - scuber) * -1;
    return disblocks;
};
};
function distanceFromHqInFeet(location){
   let disfeet= (distanceFromHqInBlocks(location))*264;
   return disfeet;
};
function distanceTravelledInFeet(start, location){
    if(location>start){
        let disTrFeet=(location-start)*264;
        return disTrFeet;
    }
    else if(location<start){
        let disTrFeet=(location-start)* -264;
        return disTrFeet;
    };
};function  calculatesFarePrice(start, location){
    if(distanceTravelledInFeet(start, location)<=400){
        let price= 0;
        return price;
    }
    else if((distanceTravelledInFeet(start, location)> 400) && (distanceTravelledInFeet(start, location)<= 2000)){
        let price=(0.02)*(distanceTravelledInFeet(start, location)-400);
        return price;
    }
    else if((distanceTravelledInFeet(start, location)> 2000) && (distanceTravelledInFeet(start, location)<= 2500)){
        let price=(25);
        return price;
    }
    else if((distanceTravelledInFeet(start, location)> 2500)){
        return 'cannot travel that far';
    };
};
