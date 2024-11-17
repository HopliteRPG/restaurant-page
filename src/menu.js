// Menu Module
export {createMenu}

import cocaCola from "./photos/cocacola.jpeg";
const cocaColaImg = document.createElement("img");
cocaColaImg.src = cocaCola;



function createMenu (){
    const contentHTML = document.querySelector("#content");

    const divCreate = document.createElement("div");

    const h1Create = document.createElement("h1");

    const pCreate = document.createElement("p");



    function createPhoto(div,photo,className){
    photo.setAttribute("class",className);
    div.appendChild(photo)
    }

    function createDivSection(content,div,className){
        let cloneDivCreate = div.cloneNode(true);
        cloneDivCreate.classList.add(className)
        content.appendChild(cloneDivCreate);
        return{cloneDivCreate}
    }

    function createP(div,p,text,className){
        let clonePCreate = p.cloneNode(true);
        clonePCreate.innerText = text;
        clonePCreate.classList.add(className);
        div.appendChild(clonePCreate);
        
    }

    function createH1(div,h1,text,className){
        let cloneH1Create = h1.cloneNode(true);
        cloneH1Create.innerText = text;
        cloneH1Create.classList.add(className);
        div.appendChild(cloneH1Create);
    }

    const headerDiv = createDivSection(contentHTML,divCreate,"headerDiv");
    const headerH1 = createH1(headerDiv.cloneDivCreate,h1Create,"Menu","menuTextHeader");

    const beveragesH1Div = createDivSection(contentHTML,divCreate,"beveragesH1Div");
    const beveragesH1 = createH1(beveragesH1Div.cloneDivCreate,h1Create,"Beverages","beveragesH1");

    const cocaColaDiv = createDivSection(contentHTML,divCreate,"cocaColaDiv");
    const cocaColaH1 = createH1(cocaColaDiv.cloneDivCreate,h1Create,"Coca Cola","cocaColaH1");
    const cocaColaImgDiv = createPhoto(cocaColaDiv.cloneDivCreate,cocaColaImg,"cocaColaImg")
    const cocaColaDescP = createP(cocaColaDiv.cloneDivCreate,pCreate,"Enjoy a nice cold Coca Cola with your meal","cocaColaDescP");
    const cocaColaPriceP = createP(cocaColaDiv.cloneDivCreate,pCreate,"$5","cocaColaPriceP");

    


}