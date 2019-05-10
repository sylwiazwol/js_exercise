
const names = [];
const div = document.querySelector('div');
const addName =(e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const name = input.value;
   if(input.value.length){
       for( imie of names){
        if(imie === name){
           alert('to już jest');
            return;
        }
       }
    names.push(name);
    div.textContent+= name + ", ";
    input.value = "";
   }
}

document.querySelector('button').addEventListener('click', addName);



