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
                removeMissingValuesWarning();
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
            const paragraph = document.createElement('p');
            const button = document.createElement('button');
            button.innerHTML = 'Delete';
            button.classList.add('delete');
            button.setAttribute('unique-id',`${person.id}`);
            paragraph.innerHTML = `Name: ${person.name}, Birth Year: ${person.year}`;
            paragraph.appendChild(button);
            container.appendChild(paragraph);
        })
        deletePerson();
    }

    const missingValuesWarning = (selector) => {
        const container = document.querySelector(`.${selector}`);
        const paragraph = document.createElement('p');
        paragraph.classList.add('error');
        paragraph.innerHTML = `Missing values detected.`
        container.appendChild(paragraph);
    }

    const removeMissingValuesWarning = () => {
        const paragraph = document.querySelector('.error');
        if (paragraph) {
            paragraph.remove();    
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
            removeMissingValuesWarning();
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
        removeMissingValuesWarning();
        removeMissingValuesWarning();
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