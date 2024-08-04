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
                removeMissingValuesWarning();
                console.log(peopleManager.people)
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
        const nameInputValue = document.querySelector('.name');
        const birthYearInputValue = document.querySelector('.birth-year');
        nameInputValue.value = '';
        birthYearInputValue. value = '';
    }

    const peopleLibrary = (people) => {
        clearPeopleLibrary();
        people.forEach((person, index) => {
            const container = document.querySelector('.people-library');
            const paragraph = document.createElement('p');
            const button = document.createElement('button');
            button.innerHTML = 'Delete';
            button.classList.add('delete');
            button.setAttribute('id',`${index}`);
            paragraph.innerHTML = `Name: ${person.name}, Birth Year: ${person.year}`;
            paragraph.appendChild(button);
            container.appendChild(paragraph);
        })
        deletePerson();
    }

    const deletePerson = () => {
        const peopleLibraryDOM = document.querySelector('.people-library');

        peopleLibraryDOM.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete')) {
                const index = e.target.getAttribute('id');
                personManager.removePerson(index, peopleManager.people);
                console.log(peopleManager.people);
                peopleLibrary(peopleManager.people);
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
        const container = document.querySelector('.year-announcer');
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<h2>Year to calculate: ${year}</h2> `;
        container.appendChild(paragraph);
    }

    const clearYearAnnouncer = () => {
        const container = document.querySelector('.year-announcer');
        container.innerHTML = '';
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

    return { personInput, yearInput };

})();

domManager.personInput();
domManager.yearInput();