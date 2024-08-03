import { peopleManager } from "./people-manager";
import { personManager } from "./person-manager";
import { ageCalculator } from "./age-calculator";

const domManager = (function DomManager() {

    const personInput = function() {
        const personSubmit = document.querySelector('.person-submit');

        personSubmit.addEventListener('click', () => {
            const nameInputValue = document.querySelector('.name').value;
            const birthYearInputValue = document.querySelector('.birth-year').value;

            if (nameInputValue == '' || birthYearInputValue == '') {
                missingValuesWarning('person-submit-error');
            } else {
                personManager.newPerson(nameInputValue, birthYearInputValue);
                personManager.addPerson(peopleManager.people);
                peopleLibrary(peopleManager.people);
                clearPersonInput();
                removeMissingValuesWarning(); //imperfect - after the first removal it doesn't go away
            }
        });
    }
    
    const missingValuesWarning = (selector) => {
        const container = document.querySelector(`.${selector}`);
        const paragraph = document.createElement('p');
        paragraph.classList.add('error');
        paragraph.innerHTML = `Missing values detected.`
        container.appendChild(paragraph);
    }

    const removeMissingValuesWarning = (selector) => {
        const paragraph = document.querySelector('.error');
        if (paragraph) {
            paragraph.remove();    
        } else {
            return;
        }
    }

    const clearPersonInput = () => {
        const nameInputValue = document.querySelector('.name').value;
        const birthYearInputValue = document.querySelector('.birth-year').value;
        nameInputValue.value = '';
        birthYearInputValue. value = '';
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
            }
        })
    }

    return { personInput, yearInput };

})();

domManager.personInput();
domManager.yearInput();