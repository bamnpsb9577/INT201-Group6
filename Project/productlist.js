import { product } from "./product(shoes).js" //import product.js
let shoeElementList = document.querySelector("#shoes-list"); //เก็บที่อยู่ของ shoes-list
for (let p of product) { //loop สำหรับรันค่าใน product ไปเรื่อยๆ
    let ele = document.createElement("div"); //div
    ele.setAttribute("id", p.ID); //id ของ product แต่ละอัน
    ele.setAttribute("class", "col-4")
    let list = document.createElement("ul"); //ul สำหรับใส่ข้อมูล
    list.setAttribute("class", "list-unstyled"); 

    //ให้ list (ul) เพิ่ม element ข้างในด้วย li เป็นข้อมูลต่างๆของ product
    list.innerHTML += `<li><img src="${p.Image}" class ="img-fluid rounded mx-auto d-block m-3"></li>`
    list.innerHTML += `<li class="fs-3">${p.Name}</li>`;
    list.innerHTML += `<li class = "data"><b>Price: ${p.Price} THB. </b></li>`;
    if(p.Stock < 200){ //ถ้า Stock น้อยกว่า 200 จะเป็นตัวหนังสือสีแดง
        list.innerHTML += `<li class = "data" style = "color: Red">Stock: ${p.Stock}</li>`;
    } else {
        list.innerHTML += `<li class = "data" style = "color: Blue">Stock: ${p.Stock}</li>`;
    }
    
    ele.appendChild(list); //ให้ list เป็น element ลูกของ ele (div)
    shoeElementList.appendChild(ele); //ใส่ ele เข้ามาใน shoe-list
    let divButton = document.createElement("div"); //div ปุ่ม
    divButton.setAttribute("class", "basket"); 
    let button = document.createElement("button"); //ปุ่ม
    button.setAttribute("class", "btn btn-success");
    button.setAttribute("onclick", "alertAdd()")
    button.textContent = "ใส่ตะกร้า";
    divButton.appendChild(button);//ใส่ปุ่มเข้าไปใน div ปุ่ม
    ele.appendChild(divButton);//ใส่ div ปุ่มเข้าไปใน ele
    list.appendChild(button);
}