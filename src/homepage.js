export {createHomepage}
import pizzaPhoto from "./photos/pizza.jpg";




function createHomepage (){
    const contentHTML = document.querySelector("#content");

    const divCreate = document.createElement("div");

    const h1Create = document.createElement("h1");


    const imageVar = document.createElement("img");
    imageVar.src = pizzaPhoto;
    imageVar.setAttribute("class","pizza-photo")


    const pCreate = document.createElement("p");

    

    function createDivSection(content,div,className){
        let cloneDivCreate = div.cloneNode(true);
        cloneDivCreate.classList.add(className)
        content.appendChild(cloneDivCreate);
        return{cloneDivCreate}
    }

    function createP(div,p,text){
        let clonePCreate = p.cloneNode(true);
        clonePCreate.innerText = text;
        div.appendChild(clonePCreate);
    }

    function createH1(div,h1,text){
        let cloneH1Create = h1.cloneNode(true);
        cloneH1Create.innerText = text;
        div.appendChild(cloneH1Create);

    }
    
    // function clearDOM(content){
    //     content.innerHTML = "";
    // }

    const headerDiv = createDivSection(contentHTML,divCreate,"HeaderDiv");
    const headerH1 = createH1(headerDiv.cloneDivCreate,h1Create,"Maines Best Pizza Joint");
    

    const descriptionDiv = createDivSection(contentHTML,divCreate,"DescriptionDiv");
    const descriptionP = createP(descriptionDiv.cloneDivCreate,pCreate,"Were the best pizza joint in all of Maine")
    const descriptionP2 = createP(descriptionDiv.cloneDivCreate,pCreate,"And it it tastes really good");





   
}


