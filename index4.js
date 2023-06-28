// function saveInput(){
//     console.log("Button Clicked from onclick attribute")
// }

const inputBtn = document.getElementById("input-btn")
const inpulEl = document.getElementById("input-el")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const unEl = document.getElementById("ul-el")
let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Array with object as element
// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

function render(leads) {
    let listItems = ""
    for(let i=0;i<leads.length;i++){
        // listItems += "<li><a target='_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a target='_blank' href = '${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`

        // unEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // unEl.append(li)
    }
    unEl.innerHTML = listItems
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inpulEl.value)
    inpulEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)

})


tabBtn.addEventListener("click", function(){
    // window.open(tabs[0].url, '_blank')
    // Grab URL of current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
      })
})


deleteBtn.addEventListener("dblclick", function(){
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

