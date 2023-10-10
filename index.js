
const addNoteBtn=document.getElementById("add");
addNoteBtn.addEventListener('click',()=>{
    addNewNote();

})
const notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    let count=0;
    let data=[];
    notes.forEach(note=>{
        data.push(note);
        addNewNote();
    })
    let notesText=document.querySelectorAll("textarea");
    let maintext=document.querySelectorAll(".main");
    notesText.forEach(notes=>{
        notes.textContent=data[count];
        count++;
    })
    count=0;
    maintext.forEach(main=>{
        main.textContent=data[count];
        count++;
    })
}

function addNewNote(){
    let note=document.createElement("div");
    note.innerHTML=`
    <div class="note">
    <div class="tools">
      <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <div class="main hidden"></div>
    <textarea></textarea>
    </div>
    `
    const noteEl=note.querySelector(".note");
    const editBtn=note.querySelector(".edit");
    const deleteBtn=note.querySelector(".delete");
    const textArea=note.querySelector("textarea");
    const main=note.querySelector(".main");
    editBtn.addEventListener('click',()=>{
        main.classList.toggle("hidden")
        textArea.classList.toggle("hidden")
    
    })

    textArea.addEventListener('input',(e)=>{
        const{value}=e.target;
        main.innerHTML=value;
        updateLS();
        
    })
    deleteBtn.addEventListener('click',()=>{
        note.remove();
        updateLS();
    })
    document.body.appendChild(note);
}

function updateLS(){
    let notesText=document.querySelectorAll("textarea");
    let note=[];
    notesText.forEach(notes=>{
        note.push(notes.value);
    })

   localStorage.setItem("notes",JSON.stringify(note));

}

