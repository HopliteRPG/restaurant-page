export {createHomepage}
import pizzaPhoto from "./photos/pizza.jpg";




function createHomepage (){
    let contentHTML = document.querySelector("#content");

    let divCreate = document.createElement("div");
    let cloneDivCreate = divCreate.cloneNode(true);

    let h1Create = document.createElement("h1")
    let cloneH1Create = h1Create.cloneNode(true);


    const imageVar = document.createElement("img");
    imageVar.src = pizzaPhoto;
    imageVar.setAttribute("class","pizza-photo")


    let pCreate = document.createElement("p");
    let clonePCreate = pCreate.cloneNode(true);

    contentHTML.appendChild(cloneDivCreate);
    cloneDivCreate.appendChild(cloneH1Create);
    cloneH1Create.innerText = "Jims Pizza";
    cloneDivCreate.appendChild(imageVar);
    cloneDivCreate.appendChild(clonePCreate);
    clonePCreate.innerText = "Jims Pizzeria makes the best pizza in the entire state of New York";



   
}


// function appendToHTML (html,div,p){
//     html.appendChild(div);
//     div.appendChild(p);
//     p.innerText = "gyatt";
// }