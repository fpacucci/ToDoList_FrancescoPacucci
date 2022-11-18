let box = document.querySelector('.box');
let lista = document.querySelector('.lista');
let bottone = document.querySelector('.bottone');
let clear = document.querySelector('.cancella');
let lista_todo = [];

//function aggiungi(){
 //   lista.innerHTML="";
   // lista_todo.forEach(function(item){
     //   let li= document.createElement("li");
       // li.innerHTML = item;
        //lista.appendChild(li);
  //  })
//}
function update_list(){
   // lista_todo.push(box.value)
}

bottone.addEventListener("click", function(){
  //  update_list();
  //  aggiungi();
   // cancellainput();
});

function cancellatutto(){
  // lista_todo.length=0;

}

clear.addEventListener("click", function(){
   // cancellatutto();
    //aggiungi();
})

function cancellainput(){
    // aggiusta metodo
}

window.addEventListener('load', () => {
      const form= document.querySelector("#input_tutto");
    const input = document.querySelector("#nuovo_elemento");
  const lista_ele = document.querySelector("#tasks");
  const cancella = document.querySelector("#div_canc");
  

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task= input.value;

        if(!task){
            alert("Please Enter Valid Value");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        


        task_el.appendChild(task_content_el);
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type ="text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const task_accept_el = document.createElement("button");
        task_accept_el.classList.add("did");
        task_accept_el.innerHTML ="DID";

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML ="EDIT";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML ="DELETE";

        task_action_el.appendChild(task_accept_el);
        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
        //task_delete_all_el.appendChild(task_delete_all_el);

        task_el.appendChild(task_action_el);


        lista_ele.appendChild(task_el);

        input.value="";

        task_edit_el.addEventListener('click', () =>{
           if(task_edit_el.innerText.toLowerCase()=="edit"){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";    
           } else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText ="Edit";
           }
            
        });

        task_delete_el.addEventListener('click', () => {
            lista_ele.removeChild(task_el);
        });

        
        task_delete_all_el.classList.add("cancella");

        task_delete_all_el.addEventListener('click', ()=>{
            
        });

        task_accept_el.addEventListener('click', () =>{
            task_el.strike();
        })

        
    })
})