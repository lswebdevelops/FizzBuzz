let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: ", 20));


let text= "";
for(let i = 1; i <= answer; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
        text += ">  "+ "FizzBuzz" + "<br>"; 
    }
    else if(i % 5 === 0){
        text += ">  "+ "Buzz" + "<br>"; 

    }else if(i % 3 === 0){
        text += ">  "+ "Fizz" + "<br>"; 
               
    }else {
        text += ">  "+ i + "<br>";
    }


 
}
document.querySelector('p').innerHTML = text;

