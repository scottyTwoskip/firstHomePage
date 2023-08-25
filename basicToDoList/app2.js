// This is the to do list app
//set variables here

const itemsContainer = document.getElementById('items')
const itemTemplate = document.getElementById('itemTemplate')
const addButton = document.getElementById('add')

let items = getItems()

function getItems() {
    const value = localStorage.getItem('toDo') || '[]'
    return JSON.parse(value)
}

function setItems(items) {
    const itemsJson = JSON.stringify(items)
    localStorage.setItem('toDo', itemsJson)
}

//unshift() is a method that adds an item to the beggining of an array
//here we are using it to add an object list item
function addItem() {
    items.unshift({
        description : '',
        completed: false
    })
    setItems(items)
    reFreshList()
}

function reFreshList(){
    //TODO: sort items

    itemsContainer.innerHTML = ''

    for (const item of items){
        const itemElement = itemTemplate.content.cloneNode(true)
        const descriptionInput = itemElement.querySelector('.itemDescription')
        const completedInput = itemElement.querySelector('.itemCompleted')
        
        descriptionInput.value = item.description
        completedInput.checked = item.description
        itemsContainer.append(itemElement)
    }
}

//button starts here:
addButton.addEventListener('click', ()=>{
    addItem()
})
reFreshList()
