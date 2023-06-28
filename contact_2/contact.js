const jar= document.getElementById("contact_me");
function fun(){
    jar.classList.add("black");
    jar.classList.remove("show");
    jar.classList.add("hide");
    console.log(jar);
}
let den= document.getElementById("contact_me");
function light(){
    den.classList.remove("black");
    den.classList.remove("hide");
    den.classList.add("show");

    console.log(den);

}
let gret=document.querySelector(".moon");
function ben(){
   gret.classList.add("black");
}
let gre=document.querySelector(".moon");
function be(){
   gret.classList.remove("black");
}
let gun = document.querySelector(".fa-sun");
function dark(){
    gun.classList.toggle("show");
    console.log(gun)
}