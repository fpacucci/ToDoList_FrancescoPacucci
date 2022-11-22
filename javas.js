const box = document.querySelector('.input_tutto');
const input = document.querySelector('#input_singolo');
const lista = document.querySelector('.lista');
const bottone = document.querySelector('.bottone');
const clear = document.querySelector('.cancella');

let lista_todo = [];

function aggiungi(task, index){
    
 
  
   const elemento_singolo = document.createElement("div");
   elemento_singolo.classList.add("elemento");
   lista.appendChild(elemento_singolo);
   const input_elemento = document.createElement("input");
        input_elemento.classList.add("text");
        input_elemento.type ="text";
        input_elemento.value = task;
    elemento_singolo.appendChild(input_elemento);

    const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");
        const did = document.createElement("button");
        did.classList.add("did");
        did.innerHTML='<ion-icon name="checkmark-circle-outline"></ion-icon>';
        did.addEventListener("click", () => {
            input_elemento.classList.toggle("barrato");
            did.classList.toggle("sbiadito");
        })
        const edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML='<ion-icon name="create-outline"></ion-icon>'
        edit.addEventListener("click", () => {
            input.value= lista_todo[index];
            lista_todo.splice(index, 1);
            lista.innerHTML="";
             lista_todo.forEach((element, index) => {
            aggiungi(element, index);
            });
            
        })
        const canc = document.createElement("button");
        canc.classList.add("delete");
        canc.innerHTML='<ion-icon name="close-circle-outline"></ion-icon>';
        canc.addEventListener("click", () =>{
            lista_todo.splice(index, 1);

            lista.innerHTML="";
             lista_todo.forEach((element, index) => {
            aggiungi(element, index);
    });
        })

        task_action_el.appendChild(did);
        task_action_el.appendChild(edit);
        task_action_el.appendChild(canc);

        elemento_singolo.appendChild(task_action_el);
        lista.appendChild(elemento_singolo);  
        


   // })
}
function update_list(task){
    lista_todo.push(task)
}



bottone.addEventListener("click", function(){
    const task= input.value;
    if(!task){
        alert("Please Enter Valid Value");
        return;
    }
    update_list(task);
    lista.innerHTML="";
    lista_todo.forEach((element, index) => {
        aggiungi(element, index);
    });
    input.value="";
   // aggiungi(task);
   //cancellainput();
});

function cancellatutto(){
   lista_todo=[];
   lista.innerHTML="";
   
}

clear.addEventListener("click", function(){
    cancellatutto();
    
})



