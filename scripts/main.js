const hint = document.getElementById('hint');
const map = document.querySelector('[alt="map"]');

// function getDistanceToTreasure (clickCoords, treasureCoords) {
//     return Math.sqrt(Math.pow((clickCoords.x-treasureCoords.x),2)+Math.pow(clickCoords.y-treasureCoords.y,2))
// }
// console.log(getDistanceToTreasure({x: 2, y : 2},{x:5, y : 4}));
// либо с деструктуризацией
function getDistanceToTreasure ({x : cX, y : cY},{x : tX, y : tY} ) // деструктуризация объектов с переименовыванием
{
    return Math.sqrt((cX - tX)**2 + (cY - tY)**2);
}

function hideTreasure (map){
    map.height
    map.width
    return {
        x: Math.floor(Math.random()*map.width),
        y: Math.floor(Math.random()*map.height),
    };


}

