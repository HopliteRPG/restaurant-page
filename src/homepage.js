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
    


    const headerDiv = createDivSection(contentHTML,divCreate,"HeaderDiv");
    const headerH1 = createH1(headerDiv.cloneDivCreate,h1Create,"Mary Maines Pizza Joint");
    

    const descriptionDiv = createDivSection(contentHTML,divCreate,"DescriptionDiv");
    const descriptionP = createP(descriptionDiv.cloneDivCreate,pCreate,"Mary has the best pizza in the whole state of Maine. Everytime I go in there Im greeted with warm smiles and good food.");
    const descriptionPReviewer = createP(descriptionDiv.cloneDivCreate,pCreate,"Maines Best Eats");
    
    
    const hoursDiv = createDivSection(contentHTML,divCreate,"DescriptionDiv");
    const hoursH1 = createH1(hoursDiv.cloneDivCreate,h1Create,"Hours");
    const hoursPMon = createP(hoursDiv.cloneDivCreate,pCreate,"Monday 6am-5pm");
    const hoursPTue = createP(hoursDiv.cloneDivCreate,pCreate,"Tuesday 6am-11pm");
    const hoursPWed = createP(hoursDiv.cloneDivCreate,pCreate,"Wednesday 6am-11pm");
    const hoursPThur = createP(hoursDiv.cloneDivCreate,pCreate,"Thursday 6am-11pm");
    const hoursPFri = createP(hoursDiv.cloneDivCreate,pCreate,"Friday 6am-11pm");
    const hoursPSat = createP(hoursDiv.cloneDivCreate,pCreate,"Saturday 6am-11pm");
    const hoursPSun = createP(hoursDiv.cloneDivCreate,pCreate,"Sunday 6am-11pm");

    const locationDiv = createDivSection(contentHTML,divCreate,"locationDiv");
    const locationH1 = createH1(locationDiv.cloneDivCreate,h1Create,"Location")
    const locationP = createP(locationDiv.cloneDivCreate,pCreate,"123 Ship St, Portland, Maine")





   
}


