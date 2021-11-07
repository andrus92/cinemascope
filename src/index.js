import "./styles.css";
import { sortArrayByName } from './utils';

document.getElementById("app").innerHTML = `<h1>Hello Cinemascope!</h1>`;

const arr = [ "View", "React", "Angular" ];
console.log(arr);
const sortedArr = sortArrayByName(arr);
console.log(sortedArr);