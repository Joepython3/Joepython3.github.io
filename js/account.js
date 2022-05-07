let user = document.getElementById("user");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");
let signUp = document.getElementById("signUp");
let error = document.getElementById("error");
let domain = location.host + "/" + "account.html" ;

// Setting The account
window.onload = function(){
    let x = location.pathname;
    if(x === "/Sign-up.html"){
        console.log("secoasdoa")
        signUp.onclick = function(e){
            e.preventDefault()
            if(user.value === "" || pass === "")
            {
                error.innerHTML = "Please Fill Username and Password..";
                error.style.color = "red";
                error.style.fontSize = "18px";
                error.style.marginBottom = "10px";
            } else {
                error.innerHTML = "Your Account is Created Successfully..";
                error.style.color = "green";
                error.style.fontSize = "18px";
                error.style.marginBottom = "10px";
                sessionStorage.setItem("user" , user.value);
                sessionStorage.setItem("pass" , pass.value);
            }
        }
    } else if (x === "/Login.html") {
        submit.onclick = function(e){
            e.preventDefault()
            let username = sessionStorage.getItem("user");
            let password = sessionStorage.getItem("pass");
            if(username === null || password === null)
            {
                error.innerHTML = "Please Sign Up First..";
                error.style.color = "red";
                error.style.fontSize = "18px";
                error.style.marginBottom = "10px";
            } else {
                if(user.value === username && pass.value === password)
                {
                    window.open(domain , "_self");
                }
            }
        }
    }

}



