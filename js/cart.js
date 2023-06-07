import nav from "../componetes/import.js";

document.getElementById("nav").innerHTML=nav()

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice=0
for(let i=0; i<cart.length; i++) {
    totalprice += cart[i].price*cart[i].qty
}
document.getElementById("price").innerHTML=`total amount: ${totalprice}`;
cart.map((ele)=>{
    
    let div=document.createElement("div")

    let img = document.createElement("img")
    img.src = ele.thumbnail

    div.append(img)
    document.getElementById("cart").append(div)
})