import { product } from "./product.js" //import product.js
import { cartEvents } from "./cart.js"

let shoeslist = document.querySelector("#shoes-list"); //ให้ shoeslist เก็บค่า element ที่ชื่อว่า shoes-list 
let searchicon = document.querySelector("#search");
let countEle = document.getElementById("cart-count");

//--------------------------------------------------------
let boolsearch = false;
let product1 = product;
list();

//--------------------------------------------------------
//search
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
                //ปรับให้สามารถรองรับการ search ได้ทั้ง upper,lower case รวมไปถึงพิมพ์เหมือนกับชื่อตั้งต้นเลยก็ได้
                if (p.Name.toLowerCase().match(value) || p.Name.toUpperCase().match(value) 
                    || p.Name.match(value)!= null) {
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
//list
function list(product2 = product1) {
    shoeslist.innerHTML = "";
    for (let p of product2) { //เปิด loop เพื่อเพิ่มlistรองเท้าอื่นๆ 
    let ele = document.createElement("div"); //สร้าง div
    ele.setAttribute("id", p.ID); //set id เป็น ตามเลข id ของแต่ละ obj นั้นๆ
    ele.setAttribute("class", "col-md-4") //set class เป็น col-4 
    let list = document.createElement("ul"); //สร้าง ul 
    list.setAttribute("class", "list-unstyled"); //set class เป็น list-unstyled

    //ให้ulเพิ่ม li โดยใช้ innerHTML ตามข้อมูลที่ใน Obj มี
    //ใช้ += เพื่อเก็บ stack แต่ละค่าไปเรื่อยๆ
    list.innerHTML += `<li><img src="${p.Image}" class ="img-fluid rounded mx-auto d-block m-md-3" width="500"></li>`
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
    buttn.setAttribute("class", "btn btn-dark btn-lg "); //set class เป็น btn btn-success
    buttn.textContent = "Add to cart"; //ให้ tag button มีข้อความข้างในว่า Add to cart 
    divBttn.appendChild(buttn);//append เข้าใน butt (button)
    ele.appendChild(divBttn);//append เข้าใน dibBttn (div)
    list.appendChild(buttn); 

        //กำหนดให้เมื่อกด buttnCancel จะเรียกใช้ function canCel()
    buttnCanCel.onclick = function() {
            alert(`คุณได้นำสินค้าออกจากตะกร้าแล้ว !`);
            cartEvents.cancel();
            cartEvents.cal(countEle);
        }

        // กำหนดให้เมื่อกด buttn จะเรียกใช้ function alertAdd()
    buttn.addEventListener("click", () => {
        alert(`Add Item !!!\nเพิ่มสินค้า "${p.Name}" ราคา ${p.Price} บาท ในตะกร้าแล้ว`);
        cartEvents.add(p);
        cartEvents.cal(countEle);
        
    });


}
}

// -------------------------------------------------------------------

