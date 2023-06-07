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
    div.setAttribute("class","mean")


    let div1=document.createElement("div1")
    let title = document.createElement("h2")
    title.innerHTML = ele.title
    title.setAttribute("class","title")
    let price = document.createElement("h3")
    price.innerHTML = ele.price
    price.setAttribute("class","price")

    div1.append(title,price)
    document.getElementById("cart").append(div,div1)
})