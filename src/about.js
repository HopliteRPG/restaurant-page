export {createAbout}


function createAbout (){
    alert("about is working")
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
}