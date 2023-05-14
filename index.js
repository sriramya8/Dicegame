
var r1=Math.floor(((Math.random()*10)%6)+1);
var r2=Math.floor(((Math.random()*10)%6)+1);
var one="./images/dice"+r1+".png";
var two="./images/dice"+r2+".png";

document.querySelector(".img1").setAttribute("src",one);

 

document.querySelector(".img2").setAttribute("src",two);


if(r1>r2){
    document.querySelector("h1").innerHTML="🚩Player 1 is Winner";
}
else if(r1<r2){
    document.querySelector("h1").innerHTML="Player 2 is Winner🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}