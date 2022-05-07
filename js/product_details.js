let addCart = document.getElementById("btn");
let itemsName = document.getElementById("item-name");
let price = document.getElementById("new-price");
let pic = document.getElementById("productimg");
if(sessionStorage.getItem("empty") === null || sessionStorage.getItem("empty") === "1"){
    let arrName = [] ;
    let arrPrice = [] ;
    let arrPic =[];
    sessionStorage.setItem("empty" , 0) 
    addCart.onclick = function(){
        if( !(arrName.includes(itemsName.innerText)) )
        {
        arrName.push(itemsName.innerText);
        arrPrice.push(price.getElementsByTagName("span")[0].innerHTML);
        arrPic.push(pic.getAttribute("src"));
        sessionStorage.setItem("name" , arrName);
        sessionStorage.setItem("price" , arrPrice);
        sessionStorage.setItem("img" , arrPic);
        arr = sessionStorage.getItem("name");
        }
    }
} else {
    let arrName = sessionStorage.getItem("name").split(",") ;
    let arrPrice = sessionStorage.getItem("price").split(",") ;
    let arrPic =sessionStorage.getItem("img").split(",");
    addCart.onclick = function(){
        if( !(arrName.includes(itemsName.innerText)) )
        {
        arrName.push(itemsName.innerText);
        arrPrice.push(price.getElementsByTagName("span")[0].innerHTML);
        arrPic.push(pic.getAttribute("src"));
        sessionStorage.setItem("name" , arrName);
        sessionStorage.setItem("price" , arrPrice);
        sessionStorage.setItem("img" , arrPic);
        arr = sessionStorage.getItem("name");
        }
    }
    }
