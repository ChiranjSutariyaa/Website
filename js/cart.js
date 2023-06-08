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
    div.setAttribute("class","mean")
    let img = document.createElement("img")
    img.src = ele.thumbnail
    img.setAttribute("class","img")
    let title = document.createElement("h2")
    title.innerHTML = ele.title
    title.setAttribute("class","title")
    let price = document.createElement("h3")
    price.innerHTML = ele.price
    price.setAttribute("class","price")

    let add= document.createElement("button")
    add.innerHTML="+"
    let qty=document.createElement("p")
    qty.innerHTML=ele.qty
    let desc= document.createElement("button")
    desc.innerHTML="-"
    let qtydiv=document.createElement("div")
    qtydiv.setAttribute("class","quyntity")
    qtydiv.append(add,qty,desc)

    div.append(img,title,price,qtydiv)
    document.getElementById("cart").append(div)


})