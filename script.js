const tabcontents = document.querySelectorAll(".tab-contents")
const tabs = document.querySelectorAll(".tab")

function tabchange(index){
    for(let i=0 ; i<tabs.length ; i++){
        tabcontents[i].style.display = "none"
    }
    tabcontents[index].style.display = "block"
}