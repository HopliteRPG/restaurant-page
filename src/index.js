import "./styles.css";
import {createHomepage} from "./homepage";
import { createMenu } from "./menu";

const contentHTML = document.querySelector("#content");
const menuBtn = document.querySelector(".menuBtn");

function clearContent(content){
    content.innerHTML = "";
   }


createHomepage();

menuBtn.addEventListener("click", ()=>{
    clearContent(contentHTML);
    createMenu();
}
);


