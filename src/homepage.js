export {createHomepage}
import pizzaPhoto from "./photos/pizza.jpg";




function createHomepage (){
    const contentHTML = document.querySelector("#content");

    const divCreate = document.createElement("div");

    const h1Create = document.createElement("h1")


    const imageVar = document.createElement("img");
    imageVar.src = pizzaPhoto;
    imageVar.setAttribute("class","pizza-photo")


    const pCreate = document.createElement("p");

    

    function createDivSection(content,div){
        const cloneDivCreate = div.cloneNode(true);
        content.appendChild(cloneDivCreate);
    }

    const descriptionDiv = createDivSection(contentHTML,divCreate);





   
}


// function appendToHTML (html,div,p,h1){
//     html.appendChild(div);
//     div.appendChild(p);
//     p.innerText = "gyatt";
// }