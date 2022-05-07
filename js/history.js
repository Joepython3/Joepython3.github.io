
let order = document.getElementsByClassName("orderView");
let archive = document.getElementsByClassName("archiveView");
let btn = document.getElementsByClassName("btns");
let archiveLink = document.getElementsByClassName("archive");
for(let i = 0 ; i < archive.length ; i++)
            {
                archive[i].style.display = "none";
            }

for(let m = 0 ; m < btn.length ; m++)
{
    let active = btn[m];
    // console.log(active)
    active.onclick = function(){
        if(active.innerText === "Orders"){
            btn[0].classList.add("activeBtn");
            btn[1].classList.remove("activeBtn");
            for(let i = 0 ; i < archive.length ; i++)
            {
                archive[i].style.display = "none";
            }
            for(let i = 0 ; i < order.length ; i++)
            {
                order[i].style.display = "";
            }

        } else {
            btn[1].classList.add("activeBtn");
            btn[0].classList.remove("activeBtn");
            for(let i = 0 ; i < order.length ; i++)
            {
                order[i].style.display = "none";
            }
            for(let i = 0 ; i < archive.length ; i++)
            {
                archive[i].style.display = "";
            }

        }
    }
}

for(let m = 0 ; m < archiveLink.length ; m++)
{
    let archiveLinkBtn = archiveLink[m]
    archiveLinkBtn.onclick = function(){
        if(archiveLinkBtn.innerText === "Archive order")
        {
            console.log("Archive")
            archiveLinkBtn.innerText = "Unarchive order"
            archiveLinkBtn.parentElement.parentElement.classList.add("archiveView");
            archiveLinkBtn.parentElement.parentElement.classList.remove("orderView");
            for(let i = 0 ; i < archive.length ; i++)
                    {
                        archive[i].style.display = "none";
                    }
        } else if (archiveLinkBtn.innerText === "Unarchive order") {
            console.log("Unarchive")
            archiveLinkBtn.innerText = "Archive order"
            archiveLinkBtn.parentElement.parentElement.classList.remove("archiveView");
            archiveLinkBtn.parentElement.parentElement.classList.add("orderView");
            for(let i = 0 ; i < order.length ; i++)
                    {
                        order[i].style.display = "none";
                    }
        }
    }
        
}
