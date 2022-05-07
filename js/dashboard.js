let edit = document.getElementById("edit");
let save = document.getElementById("save");

save.onclick = function(){
    let input = document.getElementsByClassName("form-control");
    for(let i = 0 ; i < input.length ; i++)
    {
        let attr = input[i];
        attr.setAttribute("disabled" , "")
    }
}

edit.onclick = function(){
    let input = document.getElementsByClassName("form-control");
    for(let i = 0 ; i < input.length ; i++)
    {
        let attr = input[i];
        attr.removeAttribute("disabled")
    }
}