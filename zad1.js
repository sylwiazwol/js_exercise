
const btn = document.querySelector('button');//pobiera pierwszy pasujący element

let number = 1;
let activeNumber =1;

const addElement = function(){
      const div=document.createElement('div');
      div.textContent = number;
     
      if(number%5 == 0){
          div.classList.add("circle");  //dodawanie klasy
      }

      document.body.appendChild(div);
      number++;
     }

btn.addEventListener("click", addElement);








