let size =10;
let orderElem = 1;

 const ulEl= document.createElement('ul');
  const btn= document.createElement('button');

const init = () => {
    btn.textContent="Stwórz element";
    document.body.appendChild(btn);
     document.body.appendChild(ulEl);
    document.body.appendChild(ulEl);
}

const createLiElem = function(){
    btn.addEventListener("click", function(){

    for(let i=0; i< 5; i++)
    {
        const liEl = document.createElement('li');
        document.body.appendChild(liEl);
        liEl.style.display="block";
        liEl.style.fontSize = size +"px";
        liEl.textContent=`element nr ${orderElem}`
        size+=1;
        orderElem++;
    }
}
);
}

init();
createLiElem();

