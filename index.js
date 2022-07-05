var n=Math.random();
n=n*6;
n=Math.floor(n)+1;

var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;

document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+n+".png");
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+n1+".png");

if(n>n1){
    document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if(n1>n){
    document.querySelector("h1").textContent="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").textContent="🚩Draw🚩";
}
