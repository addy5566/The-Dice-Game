

document.querySelector(".btn").addEventListener("click",function(){

let rand1 = Math.floor(Math.random()*6) +1;
let imageGen = "images/dice"+rand1+".png";
let image1 = document.querySelectorAll("img")[0].setAttribute("src",imageGen);


let rand2 = Math.floor(Math.random()*6)+1;
let imageGen2 = "images/dice"+rand2+".png";

let image2 = document.querySelector(".img2").setAttribute("src",imageGen2);

if(rand1>rand2){
    document.querySelector(".text").innerHTML="Player 1 wins.";
}
else if(rand1===rand2){
    document.querySelector(".text").innerHTML="Draw!.";

}

else{
    document.querySelector(".text").innerHTML="Player 2 wins.👌";

}
});