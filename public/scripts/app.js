const socket = io("http://localhost:8000/")

socket.on('connection');

let button=document.querySelector('button');
let output=document.querySelector('label')
function genrateRandom(){
    let randomNumber=Math.floor(Math.random() * 11);
    console.log(randomNumber)
    output.innerText=`Random Number: ${randomNumber}`
}

button.addEventListener('click',genrateRandom);

