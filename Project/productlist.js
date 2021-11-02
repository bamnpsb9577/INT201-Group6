import { product } from "./product(shoes).js" //import product.js
let foodlist = document.querySelector("#shoes-list"); //ให้ foodlist เก็บค่า element ที่ชื่อว่า food-list 
for (let p of product) { //เปิด loop เพื่อเพิ่มlistอาหารอื่นๆ
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
    foodlist.appendChild(ele); //append เข้าใน ele (div)
    let divBttn = document.createElement("div"); //สร้าง div
    divBttn.setAttribute("class", "cart"); //set class เป็น cart
    let buttn = document.createElement("button"); //สร้าง button
    buttn.setAttribute("class", "btn btn-success"); //set class เป็น btn btn-success
    buttn.setAttribute("onclick", "alertAdd()") //set onclick ให้ใช้ function ชื่อ alertAdd()
    buttn.textContent = "Add to cart"; //ให้ tag button มีข้อความข้างในว่า Add to cart 
    divBttn.appendChild(buttn);//append เข้าใน butt (button)
    ele.appendChild(divBttn);//append เข้าใน dibBttn (div)
    list.appendChild(buttn);
}