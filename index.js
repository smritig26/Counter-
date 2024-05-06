const countval =document.querySelector('#counter');
const inc = () =>{
   let value= parseInt(countval.innerText);
   value=value+1;
   countval.innerText=value;

};

const dec =()=>{
    let value= parseInt(countval.innerText);
    value=value-1;
    countval.innerText=value;
};