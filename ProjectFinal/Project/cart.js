import { CookieUtil } from "./cookies.js"

let cart = [];
export const cartEvents = {

cancel: function(){
    cart = [];
    CookieUtil.unset("cart");
    CookieUtil.unset("totalQty");
}

,cal: function(countEle){
    countEle.textContent = CookieUtil.get("totalQty");
}

,add: function(p){
    let id = p.ID;
    let totalQty=0;
    let checkItem = cart.filter((a) => a.product == id);
    if (checkItem==false) {
        cart.push({ product: p.ID, qty: 1 })
        cart.forEach((pc) => {
        totalQty += pc.qty;
        })
    }
    else{  
        cart.forEach((pc) => {
        pc.product== id ? pc.qty++ : pc.qty;
        totalQty += pc.qty;     
        }) 
    }       
        CookieUtil.set("totalQty",totalQty)
        CookieUtil.set("cart", JSON.stringify(cart));
    }
}
