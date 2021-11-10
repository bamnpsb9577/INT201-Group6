import { product } from "./product.js" //import product.js

let shoeslist = document.querySelector("#shoes-list");
let cart = { items: [], totalPrice: 0, itemIdIncart: [], totalQty: 0 };
// let mtcart = { items: [], totalPrice: 0, itemIdIncart: [], totalQty: 0 };
let countEle = document.getElementById("cart-count"); //ให้ countEle เก็บค่า element ที่มี ID = count-el
// let countPriceEle = document.getElementById("countPrice-el"); //ให้ countPriceEle เก็บค่า element ที่มี ID = countPrice-el
countEle.textContent = cart.totalQty;
// countPriceEle.textContent = cart.totalPrice;
let searchicon = document.querySelector("#search");
//--------------------------------------------------------
let iconsReset = document.querySelector("#icons");
//--------------------------------------------------------
let nameReset = document.querySelector("#name");
//--------------------------------------------------------


let boolsearch = false;
let product1 = product;
list();

searchicon.addEventListener("click", () => {

    boolsearch = !boolsearch;
    if (boolsearch) {
        document.querySelector("#searchbar").innerHTML += `<input type="text" id="searchValue" placeholder="Search"  class="form-control"></input>`;
        let searchvalue = document.querySelector("#searchValue");
        searchvalue.addEventListener("keyup", () => {
            console.log(searchvalue.value);
            let value = new RegExp(searchvalue.value, 'g');
            product1 = [];
            product.map((p) => {
                if (p.Name.toLowerCase().match(value) != null) {
                    product1.push(p);
                }
                console.log(p.Name.match(value));
            })
            console.log(product1);
            list();
        })
    } else {
        document.querySelector("#searchbar").innerHTML = "";
    }
    list(product)
});
//--------------------------------------------------------

iconsReset.addEventListener("click", () => {

    boolsearch = !boolsearch;
    if (boolsearch) {
        document.querySelector("#searchbar").innerHTML += `<input type="text" id="searchValue" placeholder="Search"  class="form-control"></input>`;
        let searchvalue = document.querySelector("#searchValue");
        searchvalue.addEventListener("keyup", () => {
            console.log(searchvalue.value);
            let value = new RegExp(searchvalue.value, 'g');
            product1 = [];
            product.map((p) => {
                if (p.Name.toLowerCase().match(value) != null) {
                    product1.push(p);
                }
                console.log(p.Name.match(value));
            })
            console.log(product1);
            list();
        })
    } else {
        document.querySelector("#searchbar").innerHTML = "";
    }
    list(product)
});
//--------------------------------------------------------

nameReset.addEventListener("click", () => {

    boolsearch = !boolsearch;
    if (boolsearch) {
        document.querySelector("#searchbar").innerHTML += `<input type="text" id="searchValue" placeholder="Search"  class="form-control"></input>`;
        let searchvalue = document.querySelector("#searchValue");
        searchvalue.addEventListener("keyup", () => {
            console.log(searchvalue.value);
            let value = new RegExp(searchvalue.value, 'g');
            product1 = [];
            product.map((p) => {
                if (p.Name.toLowerCase().match(value) != null) {
                    product1.push(p);
                }
                console.log(p.Name.match(value));
            })
            console.log(product1);
            list();
        })
    } else {
        document.querySelector("#searchbar").innerHTML = "";
    }
    list(product)
});
//--------------------------------------------------------

function list(product2 = product1) {

    shoeslist.innerHTML = "";
    for (let p of product2) { //เปิด loop เพื่อเพิ่มlistรองเท้าอื่นๆ
    let ele = document.createElement("div"); //สร้าง div
    ele.setAttribute("id", p.ID); //set id เป็น ตามเลข id ของแต่ละ obj นั้นๆ
    ele.setAttribute("class", "col-4") //set class เป็น col-4 
    let list = document.createElement("ul"); //สร้าง ul 
    list.setAttribute("class", "list-unstyled"); //set class เป็น list-unstyled

    //ให้ulเพิ่ม li โดยใช้ innerHTML ตามข้อมูลที่ใน Obj มี
    //ใช้ += เพื่อเก็บ stack แต่ละค่าไปเรื่อยๆ
    list.innerHTML += `<li><img src="${p.Image}" class ="img-fluid rounded mx-auto d-block m-3"></li>`
    list.innerHTML += `<li class="fs-3">${p.Name}</li>`;
    list.innerHTML += `<li class = "data"><b>Price: ${p.Price} THB. </b></li>`;
    if(p.Stock < 200){
        list.innerHTML += `<li class = "data" style = "color: Red">Stock: ${p.Stock}</li>`;
    } else {
        list.innerHTML += `<li class = "data" style = "color: Blue">Stock: ${p.Stock}</li>`;
    }
    ele.appendChild(list); //append เข้าใน list ("ul")
    shoeslist.appendChild(ele); //append เข้าใน ele (div)
    let divBttn = document.createElement("div"); //สร้าง div
    divBttn.setAttribute("class", "cart"); //set class เป็น cart
    let buttn = document.createElement("button"); //สร้าง button
    let buttnCanCel = document.getElementById("cancel") //ให้ buttnCanCel เก็บค่า element ที่มี ID = cancel
    buttn.setAttribute("class", "btn btn-success"); //set class เป็น btn btn-success
    buttn.setAttribute("onclick", "alertAdd()") //set onclick ให้ใช้ function ชื่อ alertAdd()
    buttn.textContent = "Add to cart"; //ให้ tag button มีข้อความข้างในว่า Add to cart 
    divBttn.appendChild(buttn);//append เข้าใน butt (button)
    ele.appendChild(divBttn);//append เข้าใน dibBttn (div)
    list.appendChild(buttn); 

     // function alert แจ้งเตือนเมื่อกดเพิ่มสินค้าไปยังจะกร้า
     let alertAdd = a => {
        alert(`${p.Name} ราคา ${p.Price} บาท อยู่ในตะกร้าแล้ว !!!`);
        cal(); //เรียกใช้ function cal()
    }


    //function canCel นำสินค้าในตะกร้าออก
    let canCel = a => {
        cart.items = [];
        cart.itemIdIncart = [];
        cart.totalPrice = 0;
        cart.totalQty = 0;
        cal();
    }
    

    //function cal คำนวณจำนวนสินค้า และราคาสินค้า
    let cal = a => {
        countEle.textContent = cart.totalQty;
        // countPriceEle.textContent = cart.totalPrice;
    }

    //กำหนดให้เมื่อกด buttnCancel จะเรียกใช้ function canCel() และเมื่อกด cancle จะขึ้น alert
    buttnCanCel.onclick = function() {
        alert(`คุณได้นำสินค้าออกจากตะกร้าแล้ว !`);
        canCel();
    }

    //กำหนดให้เมื่อกด buttn จะเรียกใช้ function alertAdd()
    buttn.addEventListener("click", () => {
        if (!cart.itemIdIncart.includes(p.ID)) {
            cart.itemIdIncart.push(p.ID);
            cart.items.push({ product: p, qty: 0 })
        }
        cart.totalPrice = 0;
        cart.totalQty = 0;
        cart.items.forEach((pc) => {
            pc.product.ID == p.ID ? pc.qty++ : pc.qty;
            cart.totalPrice += pc.productPrice * pc.qty;
            cart.totalQty += pc.qty;
        })
        alertAdd();
        console.log(cart.items);
    });
}
}
