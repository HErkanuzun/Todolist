
let Addtodobutton = document.getElementById(`Addtodo`);
let Clearbutton = document.getElementById(`Clear`);
let toDoContainer = document.getElementById(`toDoContainer`);
let inputText = document.getElementById(``);
let yapilacak=document.getElementById('yapilacak');

Addtodobutton.addEventListener(`click`, function(){
    if(String(yapilacak.value)!==""){
    let paragraf = document.createElement("p");
    paragraf.classList.add('paragraf-styling');
    toDoContainer.appendChild(paragraf);
    
        console.log("bos degil  ");
    
    paragraf.innerHTML = yapilacak.value;   
    yapilacak.innerHTML = "";

    paragraf.addEventListener(`click`, function(){

        paragraf.style.textDecoration = `line-through`;

    }) 

    paragraf.addEventListener(`dblclick`, function(){

        toDoContainer.removeChild(paragraf);
    })

    Clear.addEventListener(`click`, function(){

        paragraf.remove();
        
    })}
})





