//navbar 
const menu = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

// ======================= Product item 1 =======================//
$(document).ready(function(){
    const add_btn1 = document.querySelector("#add_item1");
    const reduce_btn1 = document.querySelector("#reduce_item1");

    var drink_amount = document.querySelector('.drink_amount');
    var total_drink_amount = document.querySelector('.total_drink_amount');
    var subtotal_amount = document.querySelector('#subtotal_amount');
    var tax = document.querySelector('#tax_amount')
    var all_total_amount = document.querySelector('#all_total')
    var pay_btn = document.querySelector('.pay_btn')
    var count = 0;
    // setting initial items value or it can be grab from html also 
    var drink_price = 7.5;
    var water_price = 13.50;
    var total_food_price =  14;
    var total_dessert_price = 4.5;
    var discount_amount = 0;
    



    // Add item 1
    add_btn1.onclick = () => {
        var total_item1 = document.querySelector("#total_item1");
        count++
        total_item1.innerHTML = count;

        // updating total drink price
        let drink_subtotal_total_amount =  drink_price * count + water_price;
        drink_amount.innerHTML = drink_price +"x"+ count;
        total_drink_amount.innerHTML = drink_price * count;
        total_amount.innerHTML = drink_subtotal_total_amount;

        // updating subtotal 
        var subtotal = drink_subtotal_total_amount + total_food_price + total_dessert_price;
        subtotal_amount.innerHTML = subtotal;
        var tax_amount = (subtotal*18)/100
        tax.innerHTML = tax_amount;
        var all_total = (subtotal+tax_amount)-discount_amount;
        all_total_amount.innerHTML = all_total
    }

    // reduce item 1
    reduce_btn1.onclick = () => {
        var total_item1 = document.querySelector("#total_item1");
        if(count===0){
            drink_amount.innerHTML = 0;
            return;
        }
        else{
            count--;
            total_item1.innerHTML = count;

            // updating the subtotal of drink
            let drink_subtotal_total_amount =  drink_price * count + water_price;
            drink_amount.innerHTML = drink_price +"x"+ count;
            total_drink_amount.innerHTML = drink_price * count;
            total_amount.innerHTML = drink_subtotal_total_amount;

            // updating subtotal 
            var subtotal = drink_subtotal_total_amount + total_food_price + total_dessert_price;
            subtotal_amount.innerHTML = subtotal;
            var tax_amount = (subtotal*18)/100
            tax.innerHTML = tax_amount;
            var all_total = (subtotal+tax_amount)-discount_amount;
            all_total_amount.innerHTML = all_total
        }
    }

    // Thanku message
    pay_btn.onclick = () => {
        alert("Thank you for your order"); 
    }

})
