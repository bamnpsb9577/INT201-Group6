export const cartEvents = {

    add :function() {

        //function cal คำนวณจำนวนสินค้า และราคาสินค้า
        let cal = a => {
        countEle.textContent = cart.totalQty;
        // countPriceEle.textContent = cart.totalPrice;
    }
         // function alert แจ้งเตือนเมื่อกดเพิ่มสินค้าไปยังจะกร้า
         let alertAdd = a => {
            alert(`เพิ่มสินค้า "${p.Name} ราคา ${p.Price} บาท" ในตะกร้าแล้ว !`);
            cal(); //เรียกใช้ function cal()
        }
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
    }
    
    ,cancel :function() {
        let cal = a => {
            countEle.textContent = cart.totalQty;
            
            // countPriceEle.textContent = cart.totalPrice;
        }
        //function canCel นำสินค้าในตะกร้าออก
        let canCel = a => {
            cart.items = [];
            cart.itemIdIncart = [];
            cart.totalPrice = 0;
            cart.totalQty = 0;
            cal();
        }

        //เมื่อกด cancle จะขึ้น alert
        alert(`คุณได้นำสินค้าออกจากตะกร้าแล้ว !`);
        canCel();
    }

}