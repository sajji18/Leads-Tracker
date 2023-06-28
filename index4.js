// function saveInput(){
//     console.log("Button Clicked from onclick attribute")
// }

const inputBtn = document.getElementById("input-btn")
const inpulEl = document.getElementById("input-el")
const unEl = document.getElementById("ul-el")
let myLeads = []

inputBtn.addEventListener("click", function(){
    myLeads.push(inpulEl.value)
    renderLeads()
    inpulEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        // listItems += "<li><a target='_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a target='_blank' href = '${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li>`

        // unEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // unEl.append(li)
    }
    unEl.innerHTML = listItems
}
