let bulb = document.querySelector("#bulb");
let btn = document.querySelector("#btn");


let flag = 0;

btn.addEventListener("click" , function(){
    if(flag == 0){
    bulb.style.backgroundColor = "yellow"
    console.log("Jall gya")
    bulb.innerHTML ="Jall gya";
    flag = 1;
}else{
    bulb.style.backgroundColor = "transparent"
    console.log("clicked again")
    flag = 0;
}
})