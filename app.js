// Set variables for form, inputs
const datesForm = document.querySelector('.entryContainer');
const datesDateInput = document.querySelector('#dateInput');
const datesTimeInput = document.querySelector('#timeInput');
const datesEntryInput = document.querySelector('#entryInput');
const savedDateAndTime = document.querySelector('#savedDateAndTime');
const savedEntry = document.querySelector('#savedEntry');
const savedList = document.querySelector('.savedList');

// Data
//if no datesData in local storage it turns into an array is what the code below means
let datesData = JSON.parse(localStorage.getItem('datesData')) || [];

datesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const objectDate = datesDateInput.value;
    const objectTime = datesTimeInput.value;
    const objectEntry = datesEntryInput.value;

    if (objectDate.trim() === '' || objectTime.trim() === '' || objectEntry.trim() === '') {
        alert('Please fill out a Time, Date and Entry')
        // this return here is what causes it to return early so its not added to local storage
        return
    }
    // Object goes here where data is stored
    const datesDataObject = {
        date: objectDate,
        time: objectTime,
        entry: objectEntry,
    };

    // Pushing to local storage here
    datesData.push(datesDataObject);
    localStorage.setItem('datesData', JSON.stringify(datesData));

    // Display data
    displayData();
});

function displayData() {
    savedList.innerHTML = ''; // Clear previous data

    for (const entry of datesData) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p>Date & Time: ${entry.date} ${entry.time}</p>
            <p> Description: ${entry.entry}</p>
        `;
        savedList.appendChild(listItem);
    }
}

// Initial display
displayData();
