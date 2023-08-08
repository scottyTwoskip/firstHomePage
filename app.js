//set variables for form, inputs
const datesForm = document.querySelector('.entryContainer')
const datesDateInput = document.querySelector('#dateInput')
const datesTimeInput = document.querySelector('#timeInput')
const datesEntryInput = document.querySelector('#entryInput')

// data 
let datesData = []

//left off here
//set where files come from and how


datesForm.addEventListener('submit', (i) => {
    i.preventDefault();
    const objectDate = datesDateInput.value
    const objectTime = datesTimeInput.value
    const objectEntry = datesEntryInput.value

    //object goes here where data is stored
    datesDataObject = {
        date: objectDate,
        time: objectTime,
        entry: objectEntry,
    }
    //pushing to local storage here
    datesData.push(datesDataObject)
    console.log(datesDataObject)
    localStorage.setItem('datesData', JSON.stringify(datesData))
    function displayData() {
        localStorage.setItem('datesData', datesData.value)
    }
})

