// This is the to do list app
//set variables here
//finished at 17:00
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
        description: '',
        completed: false
    })
    setItems(items)
    reFreshList()
}

function updateItem(item, key, value) {
    item[key] = value
    setItems(items)
    reFreshList()
}

function reFreshList() {
    //TODO: sort items
    itemsContainer.innerHTML = ''

    for (const item of items) {
        const itemElement = itemTemplate.content.cloneNode(true)
        const descriptionInput = itemElement.querySelector('.itemDescription')
        const completedInput = itemElement.querySelector('.itemCompleted')

        descriptionInput.value = item.description
        completedInput.checked = item.completed;

        descriptionInput.addEventListener('change', () => {
            updateItem(item, 'description', descriptionInput.value)
        })
        itemsContainer.append(itemElement)

        completedInput.addEventListener('change', () => {
            updateItem(item, 'completed', completedInput.checked)
        })
    }
}

addButton.addEventListener('click', () => {
    addItem()
})
reFreshList()
