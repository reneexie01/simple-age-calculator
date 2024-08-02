import { peopleManager } from "./people-manager";
import { personManager } from "./person-manager";
import { ageCalculator } from "./age-calculator";

const domManager = (function DomManager() {

    const personInput = function() {
        const personSubmit = document.querySelector('.person-submit');

        personSubmit.addEventListener('click', () => {
            const nameInputValue = document.querySelector('.name').value;
            const birthYearInputValue = document.querySelector('.birth-year').value;

            personManager.newPerson(nameInputValue, birthYearInputValue);
            personManager.addPerson(peopleManager.people);
            peopleLibrary(peopleManager.people);
        });
    }
    
    const peopleLibrary = (people) => {
        clearPeopleLibrary();
        people.forEach((person) => {
            const container = document.querySelector('.people-library');
            const paragraph = document.createElement('p');
            paragraph.innerHTML = `Name: ${person.name}, Birth Year: ${person.year}`;
            container.appendChild(paragraph);
        })
    }

    const clearPeopleLibrary = () => {
        const container = document.querySelector('.people-library');
        container.innerHTML= '';
    }

    let year;

    const yearAnnouncer = (year) => {
        clearYearAnnouncer();
        const container = document.querySelector('.year-announcer');
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<h2>Year to calculate: ${year}</h2> `;
        container.appendChild(paragraph);
    }

    const clearYearAnnouncer = () => {
        const container = document.querySelector('.year-announcer');
        container.innerHTML = '';
    }

    const yearInput = function() {
        const yearSubmit = document.querySelector('.year-submit');

        yearSubmit.addEventListener('click', () => {
            const yearCalculateInput = document.querySelector('.year-calculate').value;
            year = yearCalculateInput;
            yearAnnouncer(year);
        })
    }

    const clearPeopleAgeOutput = () => {
        const container = document.querySelector('.age-library');
        container.innerHTML = '';
    }

    const peopleAgeOutput = (people) => {
        clearPeopleAgeOutput();
        people.forEach((person) => {
            const container = document.querySelector('.age-library');
            const paragraph = document.createElement('p');
            paragraph.innerHTML = `Name: ${person.name}, Age: ${person.year}`;
            container.appendChild(paragraph);
        })
    }

    return { personInput, yearInput };

})();

domManager.personInput();
domManager.yearInput();