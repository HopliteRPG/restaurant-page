import "./styles.css";
import {createHomepage} from "./homepage";
import {createMenu} from "./menu";
import {createAbout} from "./about"

const contentHTML = document.querySelector("#content");

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");


function clearContent(content){
    content.innerHTML = "";
   }


createHomepage();

homeBtn.addEventListener("click", ()=>{
    clearContent(contentHTML);
    createHomepage();
})

menuBtn.addEventListener("click", ()=>{
    clearContent(contentHTML);
    createMenu();
})

aboutBtn.addEventListener("click", ()=>{
    clearContent(contentHTML);
    createAbout()
})



