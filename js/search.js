// Reseting the search bar in first page && Setting Search_Result
window.onload = function(){
    let x = location.pathname;
    let counter = 0;
    if(x === "/search.html"){
        console.log("done")
        document.querySelector("#typing").value = "";
    } else if (x === "/search_result.html") {
        document.getElementById("typing").value = sessionStorage.getItem("value");
        let itemsName = document.getElementsByClassName("item-name");
        let items = document.getElementsByClassName("item");
        let keyword = sessionStorage.getItem("value");
        for(let i = 0 ; i < itemsName.length ; i++)
        {
            let arr = itemsName[i].innerText.split(" ");
            arr = arr.map(lower)
            if(arr.includes(keyword.toLowerCase())){
                items[i].style.display = "grid";
                counter++ ;
            }
            
        }
        counter *= 700;
        document.getElementById("body").style.height = `${counter}px`;
    }

}
//Function to lowercase all elements in Array
function lower(item){
    return item.toLowerCase();
}

// Deleting by clicking on 'X'
let clean = document.getElementById("clear");
clean.onclick = function() {
    document.querySelector("#typing").value = "";
}



// Storing Value to get it back
let result = document.getElementById("typing");
result.addEventListener("keypress" , function(event) {
    if(event.key === "Enter"){
        if(result.value !== "" || result.value !== null){
            sessionStorage.setItem("value" , result.value);
            window.open("https://Joepython3.github.io/search_result.html" , "_self");
        }
    };
} );

//Making Like on the Elements
let heart = document.getElementsByClassName("fa-heart");
for(let i = 0 ; i < heart.length ; i++ ){
    heart[i].onclick = function(){
        if(heart[i].style.color === "white")
        {
            heart[i].style.color = "red"
        }
        else 
        {
            heart[i].style.color = "white"
        }
    }

}

let addCart = document.getElementsByClassName("add-btn");
let itemsName = document.getElementsByClassName("item-name");
let price = document.getElementsByClassName("new-price");
let pic = document.getElementsByClassName("stroage");
let arrName = [] ;
let arrPrice = [] ;
let arrPic =[];
sessionStorage.setItem("empty" , 0);
for(let i = 0 ; i < addCart.length ; i++ ){
    addCart[i].onclick = function(){
        if( !(arrName.includes(itemsName[i].innerText)) )
        {
            empty = 1;
            sessionStorage.setItem("empty" , empty);
            arrName.push(itemsName[i].innerText);
            arrPrice.push(price[i].getElementsByTagName("span")[0].innerHTML);
            arrPic.push(pic[i].getAttribute("src"));
            sessionStorage.setItem("name" , arrName);
            sessionStorage.setItem("price" , arrPrice);
            sessionStorage.setItem("img" , arrPic);
            arr = sessionStorage.getItem("name");
        }
    }

}

