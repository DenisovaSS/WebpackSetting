import "./index.html";
import "./style.scss";
import cup from "./img/coffee-cup.svg";
import { mult } from "./modules/culc";
const imgElem = document.querySelector(".img");
const img = new Image();
img.src = cup;
img.width = 200;
imgElem.append(img);

console.log(mult(4, 6));
console.log(mult(10, 6));