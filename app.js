// this is the DATE APP and HTML VARIABLES******

// Set variables for form, inputs
const datesForm = document.querySelector('.entryContainer');
const datesDateInput = document.querySelector('#dateInput');
const datesTimeInput = document.querySelector('#timeInput');
const datesEntryInput = document.querySelector('#entryInput');
const savedList = document.querySelector('.savedList');

// Data
let datesData = JSON.parse(localStorage.getItem('datesData')) || [];

datesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const objectDate = datesDateInput.value;
    const objectTime = datesTimeInput.value;
    const objectEntry = datesEntryInput.value;

    if (objectDate.trim() === '' || objectTime.trim() === '' || objectEntry.trim() === '') {
        alert('Please fill out a Time, Date and Entry');
        return;
    }

    const datesDataObject = {
        date: objectDate,
        time: objectTime,
        entry: objectEntry,
    };

    datesData.push(datesDataObject);
    localStorage.setItem('datesData', JSON.stringify(datesData));

    displayData();
});

function displayData() {
    savedList.innerHTML = '';

    for (let i = 0; i < datesData.length; i++) {
        const entry = datesData[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p>Date & Time: ${entry.date} ${entry.time}</p>
            <p>Description: ${entry.entry}</p>
            <button class="removeButton" data-index="${i}">Remove</button>
        `;
        savedList.appendChild(listItem);
    }

    const removeButtons = document.querySelectorAll('.removeButton');
    removeButtons.forEach(button => {
        button.addEventListener('click', handleRemove);
    });
}

function handleRemove(event) {
    const button = event.target;
    const index = button.getAttribute('data-index');

    datesData.splice(index, 1);
    localStorage.setItem('datesData', JSON.stringify(datesData));

    displayData();
}

// Load and display data when the page loads
function loadAndDisplayData() {
    const storedData = JSON.parse(localStorage.getItem('datesData'));
    if (storedData) {
        datesData = storedData;
        displayData();
    }
}

loadAndDisplayData();

// Add event listener to remove buttons after loading data
