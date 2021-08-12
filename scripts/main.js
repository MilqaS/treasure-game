import {generateTreasureCoords} from "./utils/generateTreasureCoords.js";
import { getDistanceToTreasure } from "./utils/getDistanceToTreasure.js";

const hint = document.getElementById('hint');
const treasureMap = document.querySelector('[alt="map"]');



// или переименовать импортируемую функцию в пределах этого файла
// import {generateRandomNumber as myFunc} from "./utils/generateRandomNumber.js";
// const hint = document.getElementById('hint');
// const treasureMap = document.querySelector('[alt="map"]');
// console.log(myFunc(200,20));