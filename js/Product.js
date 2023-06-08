let display = (data) => {
    data.map((ele) => {

        let div=document.createElement("div")

        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.thumbnail
        let price = document.createElement("h3")
        price.innerHTML = ele.price
        let btn = document.createElement("button")
        btn.innerHTML="Add to Cart"
        let btn2 = document.createElement("button")
        btn2.innerHTML="By Now"
        btn2.setAttribute("class","padd")
        let discountPercentage = document.createElement("h3")
        discountPercentage.innerHTML = ele.discountPercentage
        let rating = document.createElement("h3")
        rating.innerHTML = ele.rating
        let description = document.createElement("h5")
        description.innerHTML = ele.description

        div.append(title,img,price,discountPercentage,rating,description,btn,btn2)
        document.querySelector(".print").append(div)

        btn.addEventListener("click",() => {
            let cart = JSON.parse(localStorage.getItem("cart"))||[];

            let check = false;

            cart.map((item,index) => {
                if(item.id == ele.id) {
                    cart[index].qty+= 1;
                    localStorage.setItem("cart",JSON.stringify(cart));
                    check = true;
                  }
            });
            if(!check) {
                cart.push({...ele, qty:1});
                localStorage.setItem("cart",JSON.stringify(cart));
            };  
        })
    })
}

fetch("https://dummyjson.com/products")
    .then((print) => print.json())
    .then((print) => display(print.products))
