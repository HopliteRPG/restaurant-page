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
        clearDOM(content);
        content.appendChild(cloneDivCreate);
        return{content,div}
    }

    function createP(content,div,p,text){
        const clonePCreate = p.cloneNode(true);
        clearDOM(content);
        clonePCreate.innerHTML = text
        div.appendChild(clonePCreate);
        content.appendChild(div);
    }

    function createH1(content,div,h1,text){
        const cloneH1Create = h1.cloneNode(true);
        clearDOM(content);
        cloneH1Create.innerText = text;
        div.appendChild(cloneH1Create);
        content.appendChild(div);

    }
    
    function clearDOM(content){
        content.innerHTML = "";
    }

    
    const descriptionDiv = createDivSection(contentHTML,divCreate);
    const descriptionP = createP(content,descriptionDiv.div,pCreate,"Were the best pizza joint in all of Maine")
    const descriptionP2 = createP(content,descriptionDiv.div,pCreate,"And that shit is based");





   
}


// function appendToHTML (html,div,p,h1){
//     html.appendChild(div);
//     div.appendChild(p);
//     p.innerText = "gyatt";
// }