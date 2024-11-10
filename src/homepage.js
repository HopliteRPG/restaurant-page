export {createHomepage}
import pizzaPhoto from "./photos/pizza.jpg";




function createHomepage (){
    let contentHTML = document.querySelector("#content");

    let divCreate = document.createElement("div");

    let h1Create = document.createElement("h1")


    const imageVar = document.createElement("img");
    imageVar.src = pizzaPhoto;
    imageVar.setAttribute("class","pizza-photo")


    let pCreate = document.createElement("p");

    

    function createDivSection(html,div,p,ptext,h1,h1text,img){
        let cloneDivCreate = div.cloneNode(true);
        let cloneH1Create = h1.cloneNode(true);
        let clonePCreate = p.cloneNode(true);

        if(img == undefined){
            html.appendChild(cloneDivCreate);
            cloneDivCreate.appendChild(cloneH1Create);
            cloneH1Create.innerText = h1text;
            cloneDivCreate.appendChild(clonePCreate);
            clonePCreate.innerText = ptext;
        }
        else{
            html.appendChild(cloneDivCreate);
            cloneDivCreate.appendChild(cloneH1Create);
            cloneH1Create.innerText = h1text;
            cloneDivCreate.appendChild(img);    
            cloneDivCreate.appendChild(clonePCreate);
            clonePCreate.innerText = ptext;
        }
        
       
    }

    createDivSection(contentHTML,divCreate,pCreate,"Sams Pizza is the best Pizza in all of Maine",h1Create,"Sams Pizza",imageVar);
    createDivSection(contentHTML,divCreate,pCreate,"Monday-Sunday: 6am-7pm",h1Create,"Hours Open",undefined);
    createDivSection(contentHTML,divCreate,pCreate,"123 Forest Drive, Forestville, Maine",h1Create,"Location",undefined);






   
}


// function appendToHTML (html,div,p,h1){
//     html.appendChild(div);
//     div.appendChild(p);
//     p.innerText = "gyatt";
// }