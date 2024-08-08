import { peopleManager } from "./people-manager";
import { personManager } from "./person-manager";
import { ageCalculator } from "./age-calculator";
import "./style.css";

const domManager = (function DomManager() {

    const personInput = function() {
        const personSubmit = document.querySelector('.person-submit');

        personSubmit.addEventListener('click', () => {
            const nameInputValue = document.querySelector('.name').value;
            const birthYearInputValue = document.querySelector('.birth-year').value;

            if (nameInputValue == '' || birthYearInputValue == '') {
                missingValuesWarning('person-submit-error');
            } else {
                let newPerson = personManager.newPerson(nameInputValue, birthYearInputValue);
                // personManager.addPerson(peopleManager.people);
                // peopleLibrary(peopleManager.people);
                addToLocalStorage(newPerson);
                peopleManager.clearPeople();
                loadPeopleFromLocalStorage();
                renderPeopleLibrary();
                clearPersonInput();
                removeMissingValuesWarning('person-submit-error');
            }
        });
    }
    
    const addToLocalStorage = (newPerson) => {
        let people = JSON.parse(localStorage.getItem('people')) || [];
        people.push(newPerson);
        localStorage.setItem('people', JSON.stringify(people));
    }

    const loadPeopleFromLocalStorage = () => {
        const people = JSON.parse(localStorage.getItem('people')) || [];
        peopleManager.people = people;
    }

    const renderPeopleLibrary = () => {
        clearPeopleLibrary();
        peopleManager.people.forEach((person) => {
            const container = document.querySelector('.people-library');
            
            const masterDiv = document.createElement('div');
            masterDiv.classList.add('people-container');

            const div1 = document.createElement('div');
            div1.classList.add('name-birthyear');
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="render-name">Name: ${person.name}</div> 
            <div class="render-birthyear">Birth Year: ${person.year}</div>
            `;
            div1.appendChild(div);
            masterDiv.appendChild(div1);

            const div2 = document.createElement('div');
            div2.classList.add('delete-button');
            const button = document.createElement('button');
            button.innerHTML = 'Delete';
            button.classList.add('delete');
            button.setAttribute('unique-id',`${person.id}`);
            div2.appendChild(button);
            masterDiv.appendChild(div2)

            container.appendChild(masterDiv);

        })
        deletePerson();
    }

    const missingValuesWarning = (selector) => {
        const div = document.querySelector(`.error-${selector}`);
        if (div) {
            div.remove();  
        } else {
            const container = document.querySelector(`.${selector}`);
            const div = document.createElement('div');
            div.classList.add(`error-${selector}`);
            div.innerHTML = `Missing values detected.`
            container.appendChild(div); // need to prevent stacking of missing values warning when clicked multiple times
        }
    }

    const removeMissingValuesWarning = (selector) => {
        const div = document.querySelector(`.error-${selector}`);
        if (div) {
            div.remove();    
        } else {
            return;
        }
    }

    const clearPersonInput = () => {
        const nameInputValue = document.querySelector('.name');
        const birthYearInputValue = document.querySelector('.birth-year');
        nameInputValue.value = '';
        birthYearInputValue. value = '';
    }

    const deletePerson = () => {
        const peopleLibraryDOM = document.querySelector('.people-library');

        peopleLibraryDOM.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete')) {
                const id = e.target.getAttribute('unique-id');
                let people = JSON.parse(localStorage.getItem('people')) || [];
                people = people.filter((person) => person.id !== id);
                localStorage.setItem('people', JSON.stringify(people));
                loadPeopleFromLocalStorage();
                renderPeopleLibrary();
            }
        })
    }

    const clearPeopleLibrary = () => {
        const container = document.querySelector('.people-library');
        container.innerHTML= '';
    }

    let year;

    const yearAnnouncer = (year) => {
        clearYearAnnouncer();
        const yearToCalculate = document.querySelector('.year-to-calculate');
        yearToCalculate.innerHTML = `Year to calculate: ${year}`;
    }

    const clearYearAnnouncer = () => {
        const yearToCalculate = document.querySelector('.year-to-calculate');
        yearToCalculate.innerHTML = `Year to calculate:`;
    }

    const clearYearInput = () => {
        const yearCalculateInput = document.querySelector('.year-calculate');
        yearCalculateInput.value = '';
    }

    const yearInput = () => {
        const yearSubmit = document.querySelector('.year-submit');

        yearSubmit.addEventListener('click', () => {
            const yearCalculateInput = document.querySelector('.year-calculate').value;
            if (yearCalculateInput == '') {
                missingValuesWarning('year-submit-error');
            } else {
            year = yearCalculateInput;
            yearAnnouncer(year);
            ageCalculator.getYear(peopleManager.people, year);
            clearYearInput();
            removeMissingValuesWarning('year-submit-error');
            }
        })
    }

    const clearAll = () => {
        const clearButton = document.querySelector('.clear-all');

        clearButton.addEventListener('click', () => {
            clearDOM();
        })
    }

    const clearDOM = () => {
        clearPersonInput();
        clearPeopleLibrary();
        removeMissingValuesWarning('year-submit-error');
        removeMissingValuesWarning('person-submit-error');
        clearYearInput();
        clearYearAnnouncer();
        peopleManager.clearPeople();
        personManager.clearPerson();
        ageCalculator.clearPeopleAgeOutput();
        clearLocalStorage();
    }

    const clearLocalStorage = () => {
        peopleManager.clearPeople();
        localStorage.clear();
    }

    const renderExistingPeople = () => {
        loadPeopleFromLocalStorage();
        renderPeopleLibrary();
    }

    return { personInput, yearInput, clearAll, renderExistingPeople };

})();

domManager.personInput();
domManager.yearInput();
domManager.clearAll();
domManager.renderExistingPeople();