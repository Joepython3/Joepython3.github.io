// Coupon Validation
let couponBtn = document.getElementsByClassName("coupon-btn")[0];
let msg = document.getElementById("coupon-area").getElementsByTagName("span")[0];
let discount = document.getElementById("discount") ;
couponBtn.addEventListener("click" , function(){
    let code = document.getElementById("code").value;
    if(code === 'Fcih-Store-10'){
        msg.style.color = "green";
        msg.innerText = "Successfully Coupon Added!";
        discount.innerHTML = `<span>10</span>%`;

    }
    else if(code === 'Fcih-Store-30') {
        msg.style.color = "green";
        msg.innerText = "Successfully Coupon Added!";
        discount.innerHTML = `<span>30</span>%` ;
    }
    else{
        msg.style.color = "red";
        msg.innerText = "Expired Code!";
    };
    getFinalDiscount();
}) 

// Cart Total
window.onload = function(){
    try{
        itemsAdd();
    }
    finally{
        //Remove from cart
        let element = document.getElementsByClassName("fa-times-circle");
        for(let i = 0 ; i < element.length ; i++){
            let elementSepc = element[i] ;
            elementSepc.addEventListener("click" , function(){
                elementSepc.parentElement.parentElement.remove();
                let subTotal = document.getElementsByClassName("subtotal");
                let discount = document.getElementById("discount") ;
                discount.innerHTML = `<span>0</span>%`
                let total = 0;
                for(let i = 0 ; i < subTotal.length ; i++)
                    {
                        total += (+subTotal[i].getElementsByTagName("span")[0].innerText);
                    }
                    total = total.toFixed(2);
                    document.getElementById("cart-subtotal").getElementsByTagName("span")[0].innerText = total ;
                    getShipping();
                    getFinalDiscount()
            })
        }
        //End of Remove
        let subTotal = document.getElementsByClassName("subtotal");
        let discount = document.getElementById("discount") ;
        discount.innerHTML = `<span>0</span>%`
        let total = 0;
        for(let i = 0 ; i < subTotal.length ; i++)
            {
                total += (+subTotal[i].getElementsByTagName("span")[0].innerText);
            }
            total = total.toFixed(2);
            document.getElementById("cart-subtotal").getElementsByTagName("span")[0].innerText = total ;
            getShipping();
            getFinalDiscount()
            // Quantity Number
            let quantityTotal = document.getElementsByClassName("inp_val");
        for(let i = 0 ; i < quantityTotal.length ; i++)
        {
            let quantity = quantityTotal[i];
            quantity.addEventListener("change" , function(event){
                let numberChange = event.target.value;
                let price = quantity.parentElement.previousElementSibling.getElementsByTagName("span")[0];
                let subTotal = quantity.parentElement.nextElementSibling.getElementsByTagName("span")[0];
                subTotal.innerText = (+price.innerText * +numberChange).toFixed(2);
                getTotal();
                getShipping();
                getFinalDiscount()
            })
    }
    }

    }

    function getTotal(){
        let arr = document.getElementsByClassName("subtotal");
        let total = 0;
        for(let i = 0 ; i < arr.length; i++)
        {
            total += +arr[i].getElementsByTagName("span")[0].innerText;
        }
        total = total.toFixed(2);
        document.getElementById("cart-subtotal").getElementsByTagName("span")[0].innerText = total ;

    }

    function getShipping(){
        let total = document.getElementById("cart-subtotal").getElementsByTagName("span")[0].innerText;
        // console.log(total)
        if( (+total) <= 50){
            if(+total === 0 ){
                document.getElementById("shipping").innerHTML = `$<span>0</span>`;
            }
            else{
                document.getElementById("shipping").innerHTML = `$<span>10</span>`;
            }
            
        }
        else {
            document.getElementById("shipping").innerHTML = `<span>Free</span>`;
        }
    }

    function getFinalDiscount(){
        let finalTotal = document.getElementById("final-total");
        let subTotal = document.getElementById("cart-subtotal").getElementsByTagName("span")[0];
        let shipping = document.getElementById("shipping").getElementsByTagName("span")[0];
        let discount = document.getElementById("discount").getElementsByTagName("span")[0];
        let total = 0;
        if(isNaN(+shipping.innerHTML))
        {
            total =  +subTotal.innerHTML;

        }else {
            total = +shipping.innerHTML + +subTotal.innerHTML;
        }
        if(+discount.innerText !== 0){
            total = total * (1 - (+discount.innerText/100)); 
            total = total.toFixed(2);
            finalTotal.innerHTML = `<strong>$${total}</strong>`;
        }else { 
            finalTotal.innerHTML = `<strong>$${total}</strong>`;
        }
    }


function itemsAdd(){
    let arrName = [] ;
    let arrPrice = [] ;
    let arrPic =[] 
    let class1 = "price";
    let class2 = "inp_val";
    let class3 = "subtotal";
    arrName = sessionStorage.getItem("name").split(",");
    arrPrice = sessionStorage.getItem("price").split(",");
    arrPic = sessionStorage.getItem("img").split(",");
    for (let i = 0 ; i < arrName.length ; i++){
        let table = document.getElementsByTagName("table")[0];
        let row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4)
        var cell6 = row.insertCell(5)
        
        cell1.innerHTML = `<td> <i class="far fa-times-circle" ></i></td>`;
        cell2.innerHTML = `<td><img class="img_tb"  src="${arrPic[i]}" alt=""></td>`;
        cell3.innerHTML = `<td>${arrName[i]}</td>`;
        cell4.innerHTML = `<td class="${class1}" ><span>${arrPrice[i]}</span>$</td>`;
        cell4.classList.add("price")
        cell5.innerHTML = `<td><input class="${class2}" type="number" value="1" min="0"></td>`;
        cell5.classList.add("inp_val")
        cell6.innerHTML = `<td class="${class3}"><span>${arrPrice[i]}</span>$</td>`;
        cell6.classList.add("subtotal")
}
    
}


let pay = document.getElementById("pay");
pay.onclick = function(e){
    let body = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")
    let imgTotal = document.getElementsByClassName("img_tb");
    let finalTotal = document.getElementById("final-total").innerText;
    let arrImg = []
    let arrName = []
    for(let i = 0 ; i < body.length ; i++){
        let img = imgTotal[i];
        let name = body[i].getElementsByTagName("td");
        console.log(img)
        arrImg.push(img.getAttribute("src"));
        arrName.push(name[2].innerText)
    }
    sessionStorage.setItem("source" , arrImg);
    sessionStorage.setItem("nameFinal" ,arrName );
    sessionStorage.setItem("priceFinal" ,finalTotal )
}
